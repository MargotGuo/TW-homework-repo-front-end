displayAll();
document.addEventListener("click", mouseAction);
document.addEventListener("keypress", (event) => {
  if (event.which === 13 && document.getElementById("confirm-task")) { 
    return addNewTask();
  }
});

function mouseAction(event) {
  if (event.target.id === "confirm-task") {
    return addNewTask();
  } else if (event.target.name === "task-done") {
    return markAsDone(event);
  } else if (event.target.id === "all") {
    return displayAll();
  } else if (event.target.id === "active") {
    return displayActive();
  } else if (event.target.id === "complete") {
    return displayComplete();
  }
}

function displayAll() {
  clearNode();
  for (var index = 1, len = localStorage.length; index <= len; index++) {
    var localTaskDetail = JSON.parse(localStorage.getItem(index));
    displayNewTask(index, localTaskDetail);
  }
  if (document.getElementById("confirm-task-ban")) {
    document.getElementById("confirm-task-ban").setAttribute("id", "confirm-task");
  }
}

function displayActive() {
  clearNode();
  var newIndex = 0;
  for (var index = 1, len = localStorage.length; index <= len; index++) {
    var localTaskDetail = JSON.parse(localStorage.getItem(index));
    if (!localTaskDetail.checked) {
      newIndex++;
      displayNewTask(newIndex, localTaskDetail);
    }
  }
  if (document.getElementById("confirm-task-ban")) {
    document.getElementById("confirm-task-ban").setAttribute("id", "confirm-task");
  }
}

function displayComplete() {
  clearNode();
  var newIndex = 0;
  for (var index = 1, len = localStorage.length; index <= len; index++) {
    var localTaskDetail = JSON.parse(localStorage.getItem(index));
    if (localTaskDetail.checked) {
      newIndex++;
      displayNewTask(newIndex, localTaskDetail);
    }
  }
  if (document.getElementById("confirm-task")) {
    document.getElementById("confirm-task").setAttribute("id", "confirm-task-ban");
  }
}

function addNewTask() {
  var newTaskContent = document.getElementById("new-task").value;
  if (newTaskContent) {
    var newTaskIndex = localStorage.length + 1;
    var newTaskDetail = {
      id: newTaskIndex,
      task: newTaskContent,
      checked: false
    }
    var newTaskString = JSON.stringify(newTaskDetail);
    localStorage.setItem(newTaskIndex, newTaskString);
    var showIndex = document.getElementById("list").childNodes.length;
    displayNewTask(showIndex, newTaskDetail);
    document.getElementById("new-task").value = ""
  }
}

function displayNewTask(index, taskStorage) {
  var task = document.createElement("li");
  task.setAttribute("id", taskStorage.id);
  document.getElementById("list").appendChild(task);
  if (index % 2) {
    task.setAttribute("class", "task-item");
  } else {
    task.setAttribute("class", "task-item-colored");
  }
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
    "<p class='" + contentClass + "'>" + taskStorage.task + "</p>";
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
  targetString = JSON.stringify(targetStorage);
  localStorage.setItem(targetIndex, targetString);
}

function clearNode() {
  var list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  list.innerHTML = " ";
}