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
  var newIndex = 0;
  for (var index = 1, len = localStorage.length; index <= len; index++) {
    var localTaskDetail = JSON.parse(localStorage.getItem(index));
    if (localTaskDetail.status) {
      newIndex++;
      displayNewTask(newIndex, localTaskDetail);
    }
  }
}

function displayActive() {
  pageStatus = "active";
  clearNode();
  var newIndex = 0;
  for (var index = 1, len = localStorage.length; index <= len; index++) {
    var localTaskDetail = JSON.parse(localStorage.getItem(index));
    if (!localTaskDetail.checked && localTaskDetail.status) {
      newIndex++;
      displayNewTask(newIndex, localTaskDetail);
    }
  }
}

function displayComplete() {
  pageStatus = "complete";
  clearNode();
  var newIndex = 0;
  for (var index = 1, len = localStorage.length; index <= len; index++) {
    var localTaskDetail = JSON.parse(localStorage.getItem(index));
    if (localTaskDetail.checked && localTaskDetail.status) {
      newIndex++;
      displayNewTask(newIndex, localTaskDetail);
    }
  }
}

function addNewTask() {
  if (pageStatus !== "complete") {
    var newTaskContent = document.getElementById("new-task").value;
  }
  if (newTaskContent) {
    var newTaskIndex = localStorage.length + 1;
    var newTaskDetail = {
      id: newTaskIndex,
      task: newTaskContent,
      checked: false,
      status: true
    };
    var newTaskString = JSON.stringify(newTaskDetail);
    localStorage.setItem(newTaskIndex, newTaskString);
    var showIndex = document.getElementById("list").childNodes.length;
    displayNewTask(showIndex, newTaskDetail);
    document.getElementById("new-task").value = "";
  }
}

function displayNewTask(index, taskStorage) {
  var task = document.createElement("li");
  task.setAttribute("id", taskStorage.id);
  document.getElementById("list").appendChild(task);
  if (index % 2) {
    task.setAttribute("class", "task-item");
  } else {
    task.setAttribute("class", "task-item ` colored");
  }
  var indexClass;
  var contentClass;
  if (taskStorage.checked) {
    indexClass = "index-done";
    contentClass = "task-content-done";
  } else {
    indexClass = "index";
    contentClass = "task-content";
  }
  task.innerHTML = 
    "<p class='" + indexClass + "'>" + index + "." + "</p>" +
    "<input type='checkbox' name='task-done'/>" + 
    "<p class='" + contentClass + "'>" + taskStorage.task + "</p>" +
    "<img name='close' class='close' src='icon/close.svg'>";
  if (taskStorage.checked) {
    task.childNodes[1].setAttribute("checked", true);
  }
}

function markAsDone(event) {
  var targetIndex = event.target.parentNode.id;
  var targetList = document.getElementById(targetIndex);
  var targetStorage = JSON.parse(localStorage.getItem(targetIndex));
  var taskStatus = targetStorage.checked;
  if (taskStatus) {
    targetStorage.checked = false;
    targetList.childNodes[0].setAttribute("class", "index");
    targetList.childNodes[2].setAttribute("class", "task-content");
  } else {
    targetStorage.checked = true;
    targetList.childNodes[0].setAttribute("class", "index-done");
    targetList.childNodes[2].setAttribute("class", "task-content-done");
  }
  var targetString = JSON.stringify(targetStorage);
  localStorage.setItem(targetIndex, targetString);
}

function deleteTask(event) {
  var userMessage = confirm("是否删除该 TODO？");
  if (userMessage) {
    confirmDelete(event);
  }
}

function confirmDelete(event) {
  var targetIndex = event.target.parentNode.id;
  var targetStorage = JSON.parse(localStorage.getItem(targetIndex));
  targetStorage.status = false;
  var targetString = JSON.stringify(targetStorage);
  localStorage.setItem(targetIndex, targetString);
  switch (pageStatus) {
  case "all":
    displayAll();
    break;
  case "active":
    displayActive();
    break;
  case "complete":
    displayComplete();
    break;
  default:
    break;
  }
}

function clearNode() {
  var list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  list.innerHTML = " ";
}