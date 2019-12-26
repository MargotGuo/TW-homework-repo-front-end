displayAll();
var pageStatus = "all"; // "all" | "active" | "complete"
document.addEventListener("click", mouseAction);
document.addEventListener("keypress", (event) => {
  if (event.which === 13) { 
    addNewTask();
  }
});

function mouseAction(event) {
  if (event.target.id === "confirm-task") {
    addNewTask();
  } else if (event.target.name === "task-done") {
    markAsDone(event);
  } else if (event.target.id === "all") {
    displayAll();
  } else if (event.target.id === "active") {
    displayActive();
  } else if (event.target.id === "complete") {
    displayComplete();
  } else if (event.target.name === "close") {
    deleteTask(event);
  }
}

function displayAll() {
  pageStatus = "all";
  clearNode();
  if (localStorage.getItem("task")) {
    var data = JSON.parse(localStorage.getItem("task"));
    var displayIndex = 1;
    data.map((task) => {
      displayNewTask(data.indexOf(task), displayIndex, task);
      displayIndex++;
    });
  }
}

function displayActive(){
  pageStatus = "active";
  clearNode();
  if (localStorage.getItem("task")) {
    var data = JSON.parse(localStorage.getItem("task"));
    var displayIndex = 1;
    data.map((task) => {
      if (!task.checked) {
        displayNewTask(data.indexOf(task), displayIndex, task);
        displayIndex++;
      }
    });
  }
}

function displayComplete() {
  pageStatus = "complete";
  clearNode();
  if (localStorage.getItem("task")){
    var data = JSON.parse(localStorage.getItem("task"));
    var displayIndex = 1;
    data.map((task) => {
      if (task.checked) {
        displayNewTask(data.indexOf(task), displayIndex, task);
        displayIndex++;
      }
    });
  }
}

function displayNewTask(storageIndex, displayIndex, item) {
  var newTaskLine = document.createElement("li");
  document.getElementById("list").appendChild(newTaskLine);
  newTaskLine.setAttribute("id", storageIndex);
  var style = setStyle(newTaskLine, displayIndex, item);
  newTaskLine.innerHTML = 
    "<p class='" + style[0] + "'>" + displayIndex + "." + "</p>" +
    "<input type='checkbox' name='task-done'/>" + 
    "<p class='" + style[1] + "'>" + item.task + "</p>" +
    "<img name='close' class='close' src='icon/close.svg'>";
  if (item.checked) {
    newTaskLine.childNodes[1].setAttribute("checked", true);
  }
}

function setStyle(newTaskLine, displayIndex, item) {
  if ((displayIndex) % 2) {
    newTaskLine.setAttribute("class", "task-item");
  } else {
    newTaskLine.setAttribute("class", "task-item colored");
  }
  var indexClass;
  var contentClass;
  if (item.checked) {
    indexClass = "index-done";
    contentClass = "task-content-done";
  } else {
    indexClass = "index";
    contentClass = "task-content";
  }
  return [indexClass, contentClass];
}

function addNewTask() {
  if (pageStatus !== "complete") {
    var newTaskContent = document.getElementById("new-task").value;
  }
  if (newTaskContent) {
    var data;
    var newStorageIndex;
    if (localStorage.getItem("task")) {
      data = JSON.parse(localStorage.getItem("task"));
      newStorageIndex = data.length;
    } else {
      data = [];
      newStorageIndex = 0;
    }
    var newTaskDetail = {
      task: newTaskContent,
      checked: false,
    };
    data[newStorageIndex] = newTaskDetail;
    var dataString = JSON.stringify(data);
    localStorage.setItem("task", dataString);
    var displayIndex = document.getElementById("list").childNodes.length + 1;
    displayNewTask(newStorageIndex, displayIndex, newTaskDetail);
    document.getElementById("new-task").value = "";
  }
}

function markAsDone(event) {
  var targetIndex = event.target.parentNode.id;
  var targetRow = document.getElementById(targetIndex);
  var data = JSON.parse(localStorage.getItem("task"));
  var targetStorage = data[targetIndex];
  var taskStatus = targetStorage.checked;
  if (taskStatus) {
    targetStorage.checked = false;
    targetRow.childNodes[0].setAttribute("class", "index");
    targetRow.childNodes[2].setAttribute("class", "task-content");
  } else {
    targetStorage.checked = true;
    targetRow.childNodes[0].setAttribute("class", "index-done");
    targetRow.childNodes[2].setAttribute("class", "task-content-done");
  }
  var dataString = JSON.stringify(data);
  localStorage.setItem("task", dataString);
}

function deleteTask() {
  var userMessage = confirm("是否删除该 TODO？");
  if (userMessage) {
    confirmDelete(event);
  }
}

function confirmDelete(event) {
  var targetIndex = event.target.parentNode.id;
  var data = JSON.parse(localStorage.getItem("task"));
  data.splice(targetIndex, 1);
  var dataString = JSON.stringify(data);
  localStorage.setItem("task", dataString);
  if (pageStatus === "all") {
    displayAll();
  } else if (pageStatus === "active") {
    displayActive();
  } else if (pageStatus === "complete") {
    displayComplete();
  }
}

function clearNode() {
  var list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}