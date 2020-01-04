const menuInfo = (() => {
  let menuArray = loadAllItems();
  let outputInfo = {};
  menuArray.forEach((item) => {
    outputInfo[item.id] = {};
    outputInfo[item.id].name = item.name;
    outputInfo[item.id].price = item.price;
  });
  return outputInfo;
})();

let bestCharge = (selectedItems) => {
  let result;
  let planA = new PlanA(selectedItems);
  let planB = new PlanB(selectedItems);
  let plan = new Plan(selectedItems);

  if (planA.isInDiscount() && planB.isInDiscount()) {
    result = compare(planA, planB);
  } else {
    if (planA.isInDiscount()) {
      result = planA.getOutputInfo();
    } else if (planB.isInDiscount()) {
      result = planB.getOutputInfo();
    } else if (selectedItems.length === 0) {
      result = "您没有选择菜品";
    } else {
      result = plan.getOutputInfo();
    }
  }
  return result;
};

let compare = (planA, planB) => {
  return (planA.discount >= planB.discount) ? planA.getOutputInfo() : planB.getOutputInfo();
};

class Plan {
  constructor(food) {
    this.food = this.getFood(food);
    this.sum = this.getSum();
    this.finalPrice = this.sum;
    this.foodDetail = (() => {
      let detail = "";
      for (let key in this.food) {
        detail += `${menuInfo[key].name} x ${this.food[key]} = ${menuInfo[key].price * this.food[key]}元\n`;
      }
      detail = detail.substring(0, detail.length - 1);
      return detail;
    })();
  }

  getFood(food) {
    let foodObj = {};
    food.forEach((currentFood) => {
      let foodId = currentFood.split("x")[0].trim();
      let count = Number(currentFood.split("x")[1]);
      foodObj[foodId] = count;
    });
    return foodObj;
  }

  getSum() {
    let sum = 0;
    for(let key in this.food) {
      sum += menuInfo[key].price * this.food[key];
    }
    return sum;
  }

  getOutputInfo() {
    return `============= 订餐明细 =============
${this.foodDetail}
-----------------------------------
${this.discount ? this.discountDetail + 
"\n-----------------------------------\n" :""}总计：${this.finalPrice}元
===================================`;
  }
}

class PlanA extends Plan {
  constructor(food) {
    super(food);
    this.discount = 6;
    this.finalPrice -= this.discount;
    this.discountDetail = `使用优惠:
满30减6元，省6元`;
  }

  isInDiscount() {
    return (this.getSum(this.food) >= 30) ? true : false;
  }
}

class PlanB extends Plan {
  constructor(food) {
    super(food);
    this.discount = (() => {
      let discount = 0;
      for (let key in this.food) {
        discount += (key === "ITEM0001" || key === "ITEM0022") ? (this.food[key] * menuInfo[key].price * 0.5) : 0;
      }
      return discount;
    })();
    this.finalPrice -= this.discount;
    this.discountDetail = `使用优惠:
指定菜品半价(${this.getDiscountName()})，省${this.discount}元`;
  }

  isInDiscount() {
    return ("ITEM0001" in this.food || "ITEM0022" in this.food) ? true : false;
  }

  getDiscountName() {
    let name = "";
    for (let key in this.food) {
      name += (key === "ITEM0001" || key === "ITEM0022") ? `${menuInfo[key].name}，` : "";
    }
    name = name.substring(0, name.length - 1);
    return name;
  }
}