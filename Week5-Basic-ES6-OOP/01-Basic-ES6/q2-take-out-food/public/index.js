displayMenu();
displayPromotion();
document.getElementById("calculate").addEventListener("click", calculatePrice);
document.getElementById("clear").addEventListener("click", clear);

function displayMenu() {
  document.getElementById("items").innerHTML = `
  <tr>
    <th>序号</th>
    <th>菜品代号</th>
    <th>菜品</th>
    <th>价格</th>
    <th>数量</th>
  </tr>`;
  let menu = loadAllItems();
  menu.forEach((item) => {
    document.getElementById("items").innerHTML += `
    <tr>
      <td>${menu.indexOf(item) + 1}</td>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><input name="count" type="text", value=0 id="${menu.indexOf(item)}"></td>
    </tr>`;
  });
}

function displayPromotion() {
  document.getElementById("promotions").innerHTML = `
  <tr>
    <th>序号</th>
    <th>优惠种类</th>
    <th>详情</th>
  </tr>`;
  let promotion = loadPromotions();
  promotion.forEach((item) => {
    document.getElementById("promotions").innerHTML += `
    <tr>
      <td>${promotion.indexOf(item) + 1}</td>
      <td>${item.type}</td>
      <td>${(item.items) ? item.items : ""}</td>
    </tr>`
  });
}

function calculatePrice() {
  let menu = loadAllItems();
  menu.forEach((item, currentIndex) => {
    itemCount = document.getElementById(currentIndex).value;
    menu[currentIndex].count = itemCount;
  });
  let selectedItems = [];
  menu.forEach((item) => {
    if (item.count !== "0") {
      let info = `${item.id} x ${item.count}`
      selectedItems.push(info);
    };
  });

  let outputInfo = bestCharge(selectedItems);
  return outputInfo;
}


function clear() {
  document.getElementById("message").innerHTML = "";
  document.getElementsByName("count").forEach((item) => {
    item.value = 0;
  });
}