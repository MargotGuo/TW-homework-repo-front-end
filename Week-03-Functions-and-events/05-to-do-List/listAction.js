const STATUS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETE: "complete"
};
var pageStatus = STATUS.ALL;
renderTask();
document.addEventListener("click", mouseAction);
document.addEventListener("keypress", (event) => {
  if (event.code === "Enter" && document.getElementById("new-task").value) { 
    addNewTask();
  }
});

function mouseAction(event) {
  if (event.target.id === "confirm-task" && document.getElementById("new-task").value) {
    addNewTask();
  }
  if (event.target.name === "task-done") {
    markAsDone(event);
  }
  if (event.target.id === "all" && localStorage.getItem("task")) {
    pageStatus = STATUS.ALL;
    clearNode();
    renderTask();
  }
  if (event.target.id === "active" && localStorage.getItem("task")) {
    pageStatus = STATUS.ACTIVE;
    clearNode();
    renderTask();
  }
  if (event.target.id === "complete" && localStorage.getItem("task")) {
    pageStatus = STATUS.COMPLETE;
    clearNode();
    renderTask();
  }
  if (event.target.name === "close") {
    deleteTask(event);
  }
}

function renderTask() {
  var allData = JSON.parse(localStorage.getItem("task"));
  var displayData;
  if (pageStatus === STATUS.ALL) {
    displayData = allData;
  }
  if (pageStatus === STATUS.ACTIVE) {
    displayData = allData.filter((task) => {
      return !task.checked;
    });
  }
  if (pageStatus === STATUS.COMPLETE) {
    displayData = allData.filter((task) => {
      return task.checked;
    });
  }
  displayData.forEach((task) => {
    displayNewTask(allData.indexOf(task), task);
  });
}

function displayNewTask(storageIndex, item) {
  document.getElementById("list").innerHTML +=
  "<li id=" + storageIndex + " class='task-item" + `${item.checked ? " complete" : " active"}` + "'>" +
    "<input class='checkbox' type='checkbox' name='task-done'" + `${item.checked ? " checked" : " !checked"}` + "/>" + 
    "<span class='task-content'>" + item.task + "</span>" +
    "<img name='close' class='close' src='icon/close.svg'>" +
  "</li>";
}

function addNewTask() {
  var newTaskContent = document.getElementById("new-task").value;
  var data;
  if (localStorage.getItem("task")) {
    data = JSON.parse(localStorage.getItem("task"));
  } else {
    data = [];
  }
  var newTaskDetail = {
    task: newTaskContent,
    checked: false,
  };
  if (pageStatus !== STATUS.COMPLETE) {
    displayNewTask(data.length, newTaskDetail);
  }
  data.push(newTaskDetail);
  localStorage.setItem("task", JSON.stringify(data));
  document.getElementById("new-task").value = "";
}

function markAsDone(event) {
  var targetIndex = event.target.parentNode.id;
  var targetRow = document.getElementById(targetIndex);
  var data = JSON.parse(localStorage.getItem("task"));
  var taskStatus = data[targetIndex].checked;
  if (taskStatus) {
    data[targetIndex].checked = false;
    targetRow.setAttribute("class", "task-item active");
  } else {
    data[targetIndex].checked = true;
    targetRow.setAttribute("class", "task-item complete");
  }
  localStorage.setItem("task", JSON.stringify(data));
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
  localStorage.setItem("task", JSON.stringify(data));
  clearNode();
  renderTask();
}

function clearNode() {
  var list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}