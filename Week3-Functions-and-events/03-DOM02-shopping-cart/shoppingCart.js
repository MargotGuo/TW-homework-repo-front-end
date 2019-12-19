var totalProduct = getProduct();
setTable();

document.getElementById("main-table").addEventListener("click", clickEvent);

function clickEvent(event) {
  console.log(event.target);
  var targetType = event.target.id;
  if (targetType === "choose-all") {
    return chooseAll();
  }
  else {
    findAction(targetType);
  }
}

function findAction(type) {
  switch (type.slice(0, type.length - 1)) {
    case "checkbox":
      return chooseProduct(type);
    case "minus":
      return changeProductNumber(type);
    case "add":
      return changeProductNumber(type);
    default:
      break;
  }
}

function chooseProduct(type) {
  var productId = type.charAt(type.length - 1);
  var sumCount = 0;
  var sumPrice = 0;
  totalProduct.map((product) => {
    if (product.id.toString() === productId) {
      switch (product.checked) {
        case true:
          product.checked = false;
          break;
        default:
          product.checked = true;
          break;
      }
    }
    if (product.checked === true) {
      sumCount += product.count;
      sumPrice += product.sum;
    }
  });
  var summarySentence = document.getElementById("summary")
  summarySentence.innerHTML = "共计" + sumCount + "件商品，" + sumPrice + "￥";
}

function changeProductNumber(type) {
  var productId = type.charAt(type.length - 1);
  switch (type.slice(0, type.length - 1)) {
    case "minus":
      totalProduct[productId - 1].count--
      break;
    case "add":
      totalProduct[productId - 1].count++
      break;
    default:
      break;
  }
  if (totalProduct[productId - 1].count === 0) {
    var deletedProduct = document.getElementById("row" + productId);
    document.getElementById("main-table").removeChild(deletedProduct);
  }
  totalProduct[productId - 1].sum = totalProduct[productId - 1].count * totalProduct[productId - 1].price;
  var sumCount = 0;
  var sumPrice = 0;
  totalProduct.map((product) => {
    if (product.checked === true && product.count > 0) {
      sumCount += product.count;
      sumPrice += product.sum;
    }
  });
  var summarySentence = document.getElementById("summary")
  summarySentence.innerHTML = "共计" + sumCount + "件商品，" + sumPrice + "￥";
  if (document.getElementById("row" + productId))
  {
    var productCount = document.getElementById("count" + productId);
    productCount.innerHTML = totalProduct[productId - 1].count;
    var productSumPrice = document.getElementById("sum" + productId);
    productSumPrice.innerHTML = totalProduct[productId - 1].sum;
  }
}

function chooseAll() {
}

function setTable() {
  var shoppingCart = document.createElement("table");
  document.getElementById("mainPage").appendChild(shoppingCart);
  shoppingCart.setAttribute("id", "main-table");

  setTableHeader(shoppingCart);
  setTableBody(shoppingCart);
  setTableFooter(shoppingCart);
}

function setTableHeader(shoppingCart) {
  var rowHeader = document.createElement("tr");
  shoppingCart.appendChild(rowHeader);
  rowHeader.setAttribute("class", "row-header");
  rowHeader.innerHTML = 
    "<th class='row-header-cell'>选择</th>" +
    "<th class='row-header-cell'>商品名称</th>" +
    "<th class='row-header-cell'>商品单价(￥)</th>" +
    "<th class='row-header-cell'>商品数量</th>" +
    "<th class='row-header-cell'>总价(￥)</th>";
}

function setTableBody(shoppingCart) {
  totalProduct.map((product) => {
    var rowBody = document.createElement("tr");
    shoppingCart.appendChild(rowBody);
    rowBody.setAttribute("id", "row" + product.id)
    if(product.checked === true) {
      var checkBox = "<input id='checkbox" + product.id + "'type='checkbox' checked>"
    } else {
      var checkBox = "<input id='checkbox" + product.id + "'type='checkbox'>"
    }
    rowBody.innerHTML = 
      "<td class='row-body-cell'>" + checkBox + "</td>" +
      "<td class='row-body-cell'>" + product.name + "</td>" +
      "<td class='row-body-cell'>" + product.price + "</td>" +
      "<td class='row-body-cell'>" + 
      "<button id='minus" + product.id + "' class='button-cell'>-</button>" +
      "<span id='count" + product.id + "'>" + product.count + "</span>" +
      "<button id='add" + product.id + "' class='button-cell'>+</button>" + "</td>" +
      "<td class='row-body-cell' id='sum" + product.id + "'>" + product.sum + "</td>";
  });
}

function setTableFooter(shoppingCart) {
  var sumCount = 0;
  var sumPrice = 0;
  totalProduct.map((product) => {
    if (product.checked === true) {
      sumCount += product.count;
      sumPrice += product.sum;
    }
  })
  var rowFooter = document.createElement("tr");
  shoppingCart.appendChild(rowFooter);
  rowFooter.innerHTML =
    "<td class='row-body-cell'>全选&nbsp;&nbsp;<input id='choose-all' type='checkbox'></td>" +
    "<td id='summary' class='row-body-cell' colspan='4'>" + 
    "共计" + sumCount + "件商品，" + sumPrice + "￥" + "</td>";
}

function getProduct() {
  var carProducts = [
    {
      "id": 1,
      "name": "英雄牌 钢笔",
      "count": 1,
      "price": 69,
      "checked": false
    },
    {
      "id": 2,
      "name": "晨光牌 铅字笔",
      "count": 2,
      "price": 5.5,
      "checked": true
    },
    {
      "id": 3,
      "name": "晨光牌 铅笔",
      "count": 1,
      "price": 2,
      "checked": false
    },
    {
      "id": 4,
      "name": "狗熊牌 橡皮擦",
      "count": 1,
      "price": 1,
      "checked": false
    },
    {
      "id": 5,
      "name": "瑞士牌 双肩书包",
      "count": 1,
      "price": 199,
      "checked": true
    },
    {
      "id": 6,
      "name": "晨光牌 作业本",
      "count": 5,
      "price": 2.5,
      "checked": false
    }
  ];
  carProducts.map((product) => {
    product.sum = product.count * product.price;
  });
  return carProducts;
}