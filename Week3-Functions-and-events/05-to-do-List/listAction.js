previousTask();
document.getElementById("confirm-task").addEventListener("click", addNewTask);
window.addEventListener("keypress", (event) => {
  if (event.which === 13) { 
    return addNewTask();
  }
});


function previousTask() {
  for (var index = 1; index <= localStorage.length; index++) {
    var taskContent = localStorage.getItem(index);
    addLine(index, taskContent);
  }
}

function addNewTask() {
  var taskMenu = document.getElementById("list");
  var newIndex = taskMenu.childNodes.length;
  var newTaskContent = document.getElementById("task").value;
  if (newTaskContent) {
    localStorage.setItem(newIndex, newTaskContent);
    addLine(newIndex, newTaskContent);
    document.getElementById("task").value = "";
  }
}

function addLine(key, value) {
  var taskLine = document.createElement("div");
  document.getElementById("list").appendChild(taskLine);
  taskLine.setAttribute("id", "line" + key);
  taskLine.setAttribute("class", "taskLine");

  var newNumber = document.createElement("p");
  newNumber.setAttribute("class", "newNumber")
  taskLine.appendChild(newNumber);
  newNumber.innerHTML = key + ".";

  var taskDetail = document.createElement("div");
  taskDetail.setAttribute("class", "taskDetail")
  taskLine.appendChild(taskDetail);
  if (key % 2 === 0) {
    taskDetail.style.backgroundColor = "#f3ebeb";
  }

  var newCheckBox = document.createElement("input");
  taskDetail.appendChild(newCheckBox);
  newCheckBox.setAttribute("type", "checkbox");

  var newText = document.createElement("span");
  newText.setAttribute("class", "newText");
  taskDetail.appendChild(newText);
  newText.innerHTML = value;
}