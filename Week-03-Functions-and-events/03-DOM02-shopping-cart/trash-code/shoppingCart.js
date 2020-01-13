var totalProduct = getProduct();
var category = totalProduct.length;
setTable(totalProduct);

function setTable(product) {
  var body = document.getElementById("mainPage");
  if (document.getElementById("mainTable")) {
    var originalTable = document.getElementById("mainTable")
    body.removeChild(originalTable);
  }
  var table = document.createElement("table");
  body.appendChild(table);
  table.setAttribute("id", "mainTable");
  setTableHeader();
  setTableBody(product);
  setTableFooter(product);
  setTableStyle();
  bindEvent();
}

function bindEvent() {
  for (var index = 0; index < category; index++) {
    if (totalProduct[index].count > 0) {
      var targetMinusButton = document.getElementById("minusButton" + index);
      targetMinusButton.addEventListener("click", minusProduct);

      var targetAddButton = document.getElementById("addButton" + index);
      targetAddButton.addEventListener("click", addProduct);

      var targetCheckBox = document.getElementById("check" + index);
      targetCheckBox.addEventListener("click", addToShoppingCar);
    }
  }
  var chooseAllCheckBox = document.getElementById("control");
  chooseAllCheckBox.addEventListener("click", chooseAllProduct);
}

function minusProduct(event) {
  var targetIdName = event.target.id;
  var targetCategory = targetIdName.charAt(targetIdName.length - 1);
  totalProduct[targetCategory].count--;
  totalProduct[targetCategory].sum = totalProduct[targetCategory].count * totalProduct[targetCategory].price;
  setTable(totalProduct);
}

function addProduct(event) {
  var targetIdName = event.target.id;
  var targetCategory = targetIdName.charAt(targetIdName.length - 1);
  totalProduct[targetCategory].count++;
  totalProduct[targetCategory].sum = totalProduct[targetCategory].count * totalProduct[targetCategory].price;
  setTable(totalProduct);
}

function addToShoppingCar(event) {
  var targetIdName = event.target.id;
  var targetCategory = targetIdName.charAt(targetIdName.length - 1);
  if (totalProduct[targetCategory].checked === true) {
    totalProduct[targetCategory].checked = false;
  } else {
    totalProduct[targetCategory].checked = true;
  }
  setTable(totalProduct);
}

function chooseAllProduct() {
  var chooseProduct = 0;
  var allProduct = 0;
  for (var index = 0; index < category; index++) {
    if (totalProduct[index].count > 0) {
      allProduct++;
      if (totalProduct[index].checked === true) {
        chooseProduct++;
      }
    }
  }
  for (var index = 0; index < category; index++) {
    if(chooseProduct === allProduct) {
      totalProduct[index].checked = false;
    } else {
      totalProduct[index].checked = true;
    }
  }
  setTable(totalProduct);
}

function setTableHeader() {
  var rowHeader = document.createElement("tr");
  document.getElementById("mainTable").appendChild(rowHeader);
  rowHeader.setAttribute("id", "rowHeader");

  var headCell0 = document.createElement("th");
  rowHeader.appendChild(headCell0);
  headCell0.innerHTML = "选择";

  var headCell1 = document.createElement("th");
  rowHeader.appendChild(headCell1);
  headCell1.innerHTML = "商品名称";

  var headCell2 = document.createElement("th");
  rowHeader.appendChild(headCell2);
  headCell2.innerHTML = "商品单价(￥)";

  var headCell3 = document.createElement("th");
  rowHeader.appendChild(headCell3);
  headCell3.innerHTML = "商品数量";

  var headCell4 = document.createElement("th");
  rowHeader.appendChild(headCell4);
  headCell4.innerHTML = "总价(￥)";
}

function setTableBody(product) {
  var category = product.length;
  for (var index = 0; index < category; index++) {
    if (product[index].count <= 0) {
      continue;
    }
    var newRow = document.createElement("tr");
    document.getElementById("mainTable").appendChild(newRow);
    newRow.setAttribute("id", "category" + index);

    setChecked(index, product, newRow);
    setName(index, product, newRow);
    setPrice(index, product, newRow);
    setCount(index, product, newRow);
    setSum(index, product, newRow);
  }
}

function setChecked(index, product, parentRow) {
  var newCell = document.createElement("td");
  parentRow.appendChild(newCell);

  var checkbox = document.createElement("input");
  newCell.appendChild(checkbox);
  checkbox.setAttribute("id", "check" + index);
  checkbox.setAttribute("type", "checkbox");
  
  if (product[index].checked === true) {
    checkbox.setAttribute("checked", true);
  }
}

function setName(index, product, parentRow) {
  var newCell = document.createElement("td");
  parentRow.appendChild(newCell);
  newCell.innerHTML = product[index].name;
}

function setPrice(index, product, parentRow) {
  var newCell = document.createElement("td");
  parentRow.appendChild(newCell);
  newCell.innerHTML = product[index].price;
}

function setCount(index, product, parentRow) {
  var newCell = document.createElement("td");
  parentRow.appendChild(newCell);

  var minusButton = document.createElement("button"); 
  minusButton.setAttribute("id", "minusButton" + index);
  minusButton.innerHTML = '-';
  newCell.appendChild(minusButton);

  var countNumer = document.createElement("span");
  countNumer.setAttribute("id", "countNumer" + index);
  countNumer.innerHTML = " " + product[index].count + " ";
  newCell.appendChild(countNumer);

  var addButton = document.createElement("button"); 
  addButton.setAttribute("id", "addButton" + index);
  addButton.innerHTML = '+';
  newCell.appendChild(addButton);
}

function setSum(index, product, parentRow) {
  var newCell = document.createElement("td");
  parentRow.appendChild(newCell);
  newCell.innerHTML = product[index].sum;
}

function setTableFooter(product) {
  var rowFooter = document.createElement("tr");
  document.getElementById("mainTable").appendChild(rowFooter);
  rowFooter.setAttribute("id", "rowFooter");

  var control = document.createElement("td");
  rowFooter.appendChild(control);
  control.setAttribute("id", "control");

  setChooseAllBox(product);
  setSummarySentence(product);
}

function setChooseAllBox(product) {
  var checkAll = document.createElement("input");
  checkAll.setAttribute("type", "checkbox");
  checkAll.setAttribute("id", "checkAll");
  control.appendChild(checkAll);
  var category = product.length;
  var chooseProduct = 0;
  var allProduct = 0;
  for (var index = 0; index < category; index++) {
    if (product[index].count > 0) {
      allProduct++;
      if (product[index].checked === true) {
        chooseProduct++;
      }
    }
  }
  for (var index = 0; index < category; index++) {
    if(chooseProduct === allProduct) {
      checkAll.setAttribute("checked", true)
    }
  }
  var checkAllHint = document.createElement("span");
  checkAllHint.innerHTML = "全选";
  control.appendChild(checkAllHint);
}

function setSummarySentence(product) {
  var category = product.length;
  var sumCount = 0;
  var sumPrice = 0
  for (var index = 0; index < category; index++) {
    if (product[index].count <= 0) {
      continue;
    }
    if (product[index].checked === true) {
      sumCount += product[index].count;
      sumPrice += product[index].sum;
    }
  }
  var summary = document.createElement("td");
  rowFooter.appendChild(summary);
  summary.setAttribute("id", "summary");
  summary.innerHTML = "共计" + sumCount + "件商品，" + sumPrice + "￥";
}

function setTableStyle() {
  var table = document.getElementById('mainTable');
  table.setAttribute('cellspacing', '0px');
  table.style.border = '1px solid #D9D9D9'
  document.getElementById('summary').setAttribute('colspan', '4');
  document.getElementById('rowHeader').style.backgroundColor = '#E4E4E4';

  var cellClass = document.querySelectorAll('td');
  cellClass.forEach(Element => {
    Element.style.border = '0.5px solid #D9D9D9';
    Element.style.padding = '5px 15px';
    Element.style.textAlign = 'center';
  });
  var headCellClass = document.querySelectorAll('th');
  headCellClass.forEach(Element => {
    Element.style.border = '0.5px solid #D9D9D9';
    Element.style.padding = '5px 15px';
    Element.style.textAlign = 'center';
  });
  document.getElementById('summary').style.textAlign = 'right';
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
  ]
  var category = carProducts.length;
  for (var index = 0; index < category; index++) {
    carProducts[index].sum = carProducts[index].count * carProducts[index].price;
  }
  return carProducts;
}