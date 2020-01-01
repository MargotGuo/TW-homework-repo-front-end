const menuInfo = getMenuInfo();

function bestCharge(selectedItems) {
  console.log(selectedItems);
  let result;
  if (isPromotionA(selectedItems) && isPromotionB(selectedItems)) {
    console.log("a & b")
  } else {
    if (isPromotionA(selectedItems)) {
      console.log("a");
    } else if (isPromotionB(selectedItems)) {
      console.log("b");
    } else {
      console.log("no");
    }
  }
  return result;
}

function calculatePlanA(itemArr) {
}

function calculatePlanB(itemArr) {
}

function calculatePrice(itemArr) {
}

function compare(itemArr) {
}

function isPromotionA(itemArr) {
  let sum = itemArr.reduce((tempSum, currentItem) => {
    let productID = currentItem.split("x")[0].trim();
    let productCount = currentItem.split("x")[1].trim();
    return tempSum + Number(productCount) * menuInfo[productID].price;
  }, 0);
  if (sum >= 30) {
    return true;
  }
  return false;
}

function isPromotionB(itemArr) {
  let specifiedProduct = itemArr.filter((currentItem) => {
    let productID = currentItem.split("x")[0].trim();
    return ['ITEM0001', 'ITEM0022'].includes(productID);
  });
  if (specifiedProduct.length) {
    return true;
  }
  return false;
}

function getMenuInfo() {
  let menuArray = loadAllItems()
  let outputInfo = {};
  menuArray.forEach((item) => {
    outputInfo[item.id] = {};
    outputInfo[item.id].name = item.name;
    outputInfo[item.id].price = item.price;
  });
  return outputInfo;
}