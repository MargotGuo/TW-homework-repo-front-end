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
      displayNewTask(data.indexOf(task), task, displayIndex);
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
        displayNewTask(data.indexOf(task), task, displayIndex);
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
        displayNewTask(data.indexOf(task), task, displayIndex);
        displayIndex++;
      }
    });
  }
}

function displayNewTask(index, item, displayIndex) {
  var newTask = document.createElement("li");
  newTask.setAttribute("id", index);
  var style = setStyle(newTask, displayIndex, item);
  newTask.innerHTML = 
    "<p class='" + style[0] + "'>" + displayIndex + "." + "</p>" +
    "<input type='checkbox' name='task-done'/>" + 
    "<p class='" + style[1] + "'>" + item.task + "</p>" +
    "<img name='close' class='close' src='icon/close.svg'>";
  if (item.checked) {
    newTask.childNodes[1].setAttribute("checked", true);
  }
}

function setStyle(newTask, displayIndex, item) {
  document.getElementById("list").appendChild(newTask);
  if ((displayIndex) % 2) {
    newTask.setAttribute("class", "task-item");
  } else {
    newTask.setAttribute("class", "task-item colored");
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
    var newTaskIndex;
    if (localStorage.getItem("task")) {
      data = JSON.parse(localStorage.getItem("task"));
      newTaskIndex = data.length;
    } else {
      data = [];
      newTaskIndex = 0;
    }
    var newTaskDetail = {
      task: newTaskContent,
      checked: false,
    };
    data[newTaskIndex] = newTaskDetail;
    var dataString = JSON.stringify(data);
    localStorage.setItem("task", dataString);
    var displayIndex = document.getElementById("list").childNodes.length + 1;
    displayNewTask(newTaskIndex, newTaskDetail, displayIndex);
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