const menu = loadAllItems();

let displayMenu = () => {
  menu.forEach((item, currentIndex) => {
    document.getElementById("items").innerHTML += `
    <tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>
        <button name="operation" id="minus${currentIndex}">-</button>
        <span name="count" id="${currentIndex}">0</span>
        <button name="operation" id="add${currentIndex}">+</button>
      </td>
    </tr>`;
  });
};

let displayPromotion = () => {
  let promotion = loadPromotions();
  promotion.forEach((discount) => {
    document.getElementById("promotions").innerHTML += `
    <tr>
      <td>${discount.type}</td>
      <td>${(discount.items) ? discount.items : ""}</td>
    </tr>`;
  });
};

let calculatePrice = () => {
  let selectedItems = [];
  menu.forEach((item, index) => {
    let count = document.getElementById(index).innerHTML;
    if (count !== "0") {
      let info = `${item.id} x ${count}`;
      selectedItems.push(info);
    }
  });
  document.getElementById("message").innerHTML = bestCharge(selectedItems);
};

let clear = () => {
  document.getElementById("message").innerHTML = " ";
  document.getElementsByName("count").forEach((item) => {
    item.innerHTML = 0;
  });
};

let changeCount = (event) => {
  let targetId = event.target.id;
  let operation = targetId.substring(0, targetId.length - 1);
  let index = targetId.charAt(targetId.length - 1);
  if (operation === "add") {
    document.getElementById(index).innerHTML++;
  }
  if (operation === "minus" && (document.getElementById(index).innerHTML!== "0")) {
    document.getElementById(index).innerHTML--;
  }
};

displayMenu();
displayPromotion();
document.getElementById("calculate").addEventListener("click", calculatePrice);
document.getElementById("clear").addEventListener("click", clear);
document.getElementsByName("operation").forEach((button) => {
  button.addEventListener("click", changeCount);
});