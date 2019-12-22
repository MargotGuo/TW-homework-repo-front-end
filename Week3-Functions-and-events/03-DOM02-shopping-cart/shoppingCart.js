var allProduct = getProduct();
setTable();
document.addEventListener("click", clickEvent);

function clickEvent(event) {
  var targetId = event.target.id;
  if (targetId === "choose-all") {
    chooseAll();
  } else if (event.target.name === "product-check") {
    chooseProduct(targetId);
  } else if (event.target.name === "operation") {
    changeCount(targetId);
  }
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

function setTable() {
  var shoppingCart = document.createElement("table");
  document.getElementById("mainPage").appendChild(shoppingCart);
  shoppingCart.setAttribute("id", "main-table");
  setTableHeader(shoppingCart);
  setTableBody(shoppingCart);
  setTableFooter(shoppingCart);
}

function setTableHeader(shoppingCart) {
  var headerRow = document.createElement("tr");
  shoppingCart.appendChild(headerRow);
  headerRow.setAttribute("class", "row-header");
  headerRow.innerHTML = 
    "<th class='row-header-cell'>选择</th>" +
    "<th class='row-header-cell'>商品名称</th>" +
    "<th class='row-header-cell'>商品单价(￥)</th>" +
    "<th class='row-header-cell'>商品数量</th>" +
    "<th class='row-header-cell'>总价(￥)</th>";
}

function setTableBody(shoppingCart) {
  allProduct.map((product) => {
    var newBodyRow = document.createElement("tr");
    shoppingCart.appendChild(newBodyRow);
    newBodyRow.setAttribute("id", "row" + product.id);
    newBodyRow.innerHTML = `
    <td class='row-body-cell'><input name='product-check' id='checkbox${product.id}' type='checkbox'></td>
    <td class='row-body-cell'>${product.name}</td>
    <td class='row-body-cell'>${product.price}</td>
    <td class='row-body-cell'> 
      <button class='button-cell' name='operation' id='minus${product.id}'>-</button>
      <span id='count${product.id}'>${product.count}</span>
      <button class='button-cell' name='operation' id='add${product.id}'>+</button> 
    </td>
    <td class='row-body-cell' id='sum${product.id}'>${product.sum}</td>`;
    if (product.checked) {
      document.getElementById("checkbox" + product.id).setAttribute("checked", true);
    }
  });
}

function setTableFooter(shoppingCart) {
  var footerRow = document.createElement("tr");
  shoppingCart.appendChild(footerRow);
  footerRow.innerHTML =
    "<td class='row-body-cell'>全选&nbsp;&nbsp;<input id='choose-all' type='checkbox'></td>" +
    "<td id='summary' class='row-body-cell' colspan='4'></td>";
  sumSentenceChange();
}

function getSummary() {
  var sumCount = 0;
  var sumPrice = 0;
  allProduct.map((product) => {
    if (product.checked) {
      sumCount += product.count;
      sumPrice += product.sum;
    }
  });
  return [sumCount, sumPrice];
}

function sumSentenceChange() {
  var result = getSummary();
  var summary = document.getElementById("summary");
  summary.innerHTML = "共计" + result[0] + "件商品，" + result[1] + "￥";
}

function chooseProduct(targetId) {
  var productId = targetId.charAt(targetId.length - 1);
  var productIndex = productId - 1;
  var productStatus = allProduct[productIndex].checked;
  if (productStatus) {
    allProduct[productIndex].checked = false;
  } else {
    allProduct[productIndex].checked = true;
  }
  sumSentenceChange();
}

function changeCount(targetId) {
  var productId = targetId.charAt(targetId.length - 1);
  var productIndex = productId - 1;
  var operator = targetId.slice(0, targetId.length - 1);
  // data action
  if (operator === "minus") {
    allProduct[productIndex].count--;
  } else if (operator === "add") {
    allProduct[productIndex].count++;
  }
  allProduct[productIndex].sum = allProduct[productIndex].count * allProduct[productIndex].price;
  // page action
  if (allProduct[productIndex].count === 0) {
    var deletedProduct = document.getElementById("row" + productId);
    document.getElementById("main-table").removeChild(deletedProduct);
  } else {
    var productCount = document.getElementById("count" + productId);
    productCount.innerHTML = allProduct[productIndex].count;
    var productSumPrice = document.getElementById("sum" + productId);
    productSumPrice.innerHTML = allProduct[productIndex].sum;
  }
  sumSentenceChange();
}

function chooseAll() {
  // data action
  var chooseAllCheckbox = document.getElementById("choose-all");
  var chooseAllStatus = chooseAllCheckbox.checked;
  allProduct.map((product) => {
    if (chooseAllStatus) {
      product.checked = true;
    } else {
      product.checked = false;
    }
  });
  // page action
  var productCheckbox = document.getElementsByName("product-check");
  for (var index = 0, len = productCheckbox.length; index < len; index++) {
    if (chooseAllStatus) {
      productCheckbox[index].checked = true;
    } else {
      productCheckbox[index].checked = false;
    }
  }
  sumSentenceChange();
}