displayTask();
document.addEventListener("click", mouseAction);
document.addEventListener("keypress", (event) => {
  if (event.which === 13) { 
    return addNewTask();
  }
});

function mouseAction(event) {
  console.log(event);
  if (event.target.id === "confirm-task") {
    return addNewTask();
  } else if (event.target.name === "complete-task") {
    return markAsComplete(event);
  } else if (event.target.id === "all") {
    return displayTask();
  } else if (event.target.id === "active") {
    return displayActive();
  } else if (event.target.id === "complete") {
    return displayComplete();
  }
}

function displayTask() {
  clearNode();
  for (var index = 1; index <= localStorage.length; index++) {
    var taskDetail = JSON.parse(localStorage.getItem(index));
    addNewLine(index, taskDetail);
  }
  if (document.getElementById("confirm-task-ban")) {
    document.getElementById("confirm-task-ban").setAttribute("id", "confirm-task");
  }
}

function addNewTask() {
  var newIndex = document.getElementById("list").childNodes.length;
  var newTaskContent = document.getElementById("task").value;
  if (newTaskContent) {
    var newTaskDetail = {
      "id": newIndex,
      "text": newTaskContent,
      "checked": false
    }
    var newString = JSON.stringify(newTaskDetail);
    localStorage.setItem(newIndex, newString);
    addNewLine(newIndex, newTaskDetail);
    document.getElementById("task").value = "";
  }
}

function addNewLine(newIndex, newTaskDetail) {
  var taskLine = document.createElement("div");
  document.getElementById("list").appendChild(taskLine);
  taskLine.setAttribute("id", "line" + newIndex);
  if (newIndex % 2) {
    taskLine.setAttribute("class", "task-line");
  } else {
    taskLine.setAttribute("class", "task-line-colored");
  }
  if (newTaskDetail.checked) {
    taskLine.innerHTML = 
      "<p class='new-index-delete'>" + newIndex + ".</p>" +
      "<input name='complete-task' type='checkbox' checked/>" +
      "<p class='new-text-delete'>" + newTaskDetail.text + "</p>";
  } else {
    taskLine.innerHTML = 
      "<p class='new-index'>" + newIndex + ".</p>" +
      "<input name='complete-task' type='checkbox' />" +
      "<p class='new-text'>" + newTaskDetail.text + "</p>";
  }
}

function markAsComplete(event) {
  var eventLine = event.target.parentNode;
  if (event.target.checked === true) {
    eventLine.childNodes[0].setAttribute("class", "new-index-delete");
    eventLine.childNodes[2].setAttribute("class", "new-text-delete");
  } else {
    eventLine.childNodes[0].setAttribute("class", "new-index");
    eventLine.childNodes[2].setAttribute("class", "new-text");
  }
  var completeId = eventLine.id.charAt(eventLine.id.length - 1);
  var completeTask = JSON.parse(localStorage.getItem(completeId));
  var completeStatus = completeTask.checked;
  if (completeStatus) {
    completeTask.checked = false;
  } else {
    completeTask.checked = true;
  }
  localStorage.setItem(completeId, JSON.stringify(completeTask));
}

function clearNode() {
  var list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  list.innerHTML = " ";
}

function displayActive() {
  clearNode();
  var activeIndex = 0;
  for (var index = 1; index <= localStorage.length; index++) {
    var taskDetail = JSON.parse(localStorage.getItem(index));
    if (taskDetail.checked === false) {
      activeIndex++;
      addNewLine(activeIndex, taskDetail);
    }
  }
  if (document.getElementById("confirm-task-ban")) {
    document.getElementById("confirm-task-ban").setAttribute("id", "confirm-task");
  }
}

function displayComplete() {
  clearNode();
  var completeIndex = 0;
  for (var index = 1; index <= localStorage.length; index++) {
    var taskDetail = JSON.parse(localStorage.getItem(index));
    if (taskDetail.checked === true) {
      completeIndex++;
      addNewLine(completeIndex, taskDetail);
    }
  }
  if (document.getElementById("confirm-task")) {
    document.getElementById("confirm-task").setAttribute("id", "confirm-task-ban");
  }
}