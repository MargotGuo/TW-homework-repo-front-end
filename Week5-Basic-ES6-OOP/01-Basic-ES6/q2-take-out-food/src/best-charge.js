let getMenuInfo = () => {
  let menuArray = loadAllItems();
  let outputInfo = {};
  menuArray.forEach((item) => {
    outputInfo[item.id] = {};
    outputInfo[item.id].name = item.name;
    outputInfo[item.id].price = item.price;
  });
  return outputInfo;
};

const menuInfo = getMenuInfo();

let bestCharge = (selectedItems) => {
  let result;  
  if (isPlanA(selectedItems) && isPlanB(selectedItems)) {
    result = compare(selectedItems);
  } else {
    if (isPlanA(selectedItems)) {
      result = adoptPlanA(selectedItems);
    } else if (isPlanB(selectedItems)) {
      result = adoptPlanB(selectedItems);
    } else if (selectedItems.length === 0) {
      result = "您没有选择菜品";
    } else {
      result = noDiscount(selectedItems);
    }
  }
  return result;
};

let isPlanA = (food) => {
  let sum = getSum(food);
  if (sum >= 30) {
    return true;
  }
  return false;
};

let isPlanB = (food) => {
  let foodInDiscount = getDiscountFood(food);
  if (foodInDiscount.length) {
    return true;
  }
  return false;
};

let getDiscountFood = (food) => {
  let foodInDiscount = food.filter((currentFood) => {
    let foodId = currentFood.split("x")[0].trim();
    return ["ITEM0001", "ITEM0022"].includes(foodId);
  });
  return foodInDiscount;
};

let getSum = (food) => {
  let sum = food.reduce((tempSum, currentFood) => {
    let foodId = currentFood.split("x")[0].trim();
    let count = Number(currentFood.split("x")[1]);
    return tempSum + count * menuInfo[foodId].price;
  }, 0);
  return sum;
};

let getFoodDetail = (food) => {
  let detail = "";
  food.forEach((item) => {
    let foodId = item.split("x")[0].trim();
    let count = Number(item.split("x")[1]);
    detail += `${menuInfo[foodId].name} x ${count} = ${menuInfo[foodId].price * count}元\n`;
  });
  detail = detail.substring(0, detail.length - 1);
  return detail;
};

function showFinalInfo() {
  let detail = getFoodDetail(arguments[0]);
  return `============= 订餐明细 =============
${detail}
-----------------------------------
${arguments[2] ? arguments[2] + 
  "\n-----------------------------------\n" :""}总计：${arguments[1]}元
===================================`;
}

let adoptPlanA = (food) => {
  let sum = getSum(food) - 6;
  let discountInfo = `使用优惠:
满30减6元，省6元`;
  return showFinalInfo(food, sum, discountInfo);
};

let adoptPlanB = (food) => {
  let foodInDiscount = getDiscountFood(food);
  let discountInfo = `使用优惠:
指定菜品半价(${getDiscountNameB(foodInDiscount)})，省${getDiscountB(foodInDiscount)}元`;
  let sum = getSum(food) - getDiscountB(foodInDiscount);
  return showFinalInfo(food, sum, discountInfo);
};

let getDiscountB = (food) => {
  let discount = food.reduce((tempDiscount, currentFood) => {
    let foodId = currentFood.split("x")[0].trim();
    let foodCount = Number(currentFood.split("x")[1]);
    return tempDiscount + foodCount * 0.5 * menuInfo[foodId].price;
  }, 0);
  return discount;
};

let getDiscountNameB = (food) => {
  let name = "";
  food.forEach((currentFood) => {
    let foodId = currentFood.split("x")[0].trim();
    name += `${menuInfo[foodId].name}，`;
  });
  name = name.substring(0, name.length - 1);
  return name;
};

let noDiscount = (food) => {
  let sum = getSum(food);
  return showFinalInfo(food, sum);
};

let compare = (food) => {
  let discountB = getDiscountB(getDiscountFood(food));
  if (discountB > 6) {
    return adoptPlanB(food);
  }
  return adoptPlanA(food);
};