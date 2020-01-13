window.onload = () => {
  projectData.then(response => {
    renderStatistic(response.data);
    renderProject(response.data);
  }).catch(error => console.log(error));
  bindEvent();
};

const fetchData = () => axios.get("http://localhost:3000/projects");
const projectData = fetchData();

const bindEvent = () => {
  document.addEventListener("keypress", event => {
    if (event.code === "Enter" && document.getElementById("search-box").value) { 
      search();
    }
  });
};

const renderProject = (project) => {
  project.forEach(item => {
    document.getElementById("tbody").innerHTML +=
      `<tr id=${item.id}>
        <td class="body-cell">${item.name}</td>
        <td class="body-cell"><p class="project-detail">${item.description}</p></td>
        <td class="body-cell">${item.endTime}</td>
        <td class="body-cell status-${item.status.toLowerCase()}">${item.status}</td>
        <td class="body-cell"><button class="delete" onclick="deleteProject(${item.id})">删除</button></td>
      </tr>`;
  });
};

const renderStatistic = (project) => {
  let countResult = count(project);
  let sum = project.length;
  document.getElementById("sum").innerHTML = sum;
  ["PENDING", "ACTIVE", "CLOSED"].forEach(status => {
    let numberInfo = document.getElementById(`${status.toLowerCase()}-number`);
    let percentInfo = document.getElementById(`${status.toLowerCase()}-percent`);
    if (countResult[status]) {
      numberInfo.innerHTML = countResult[status];
      percentInfo.innerHTML = `${Math.round(countResult[status] / sum * 100)}%`;
    } else {
      numberInfo.innerHTML = "0";
      percentInfo.innerHTML = "0%";
    }
  });
};

const count = (project) => {
  let result = {};
  project.forEach(item => {
    result[item.status] ? result[item.status]++ : result[item.status] = 1;
  });
  return result;
};

const deleteProject = (id) => {
  let alert = document.getElementById("confirm-delete");
  alert.classList.add("activate");
  document.getElementById("confirm").onclick = () => {
    document.getElementById(id).remove();
    axios.delete(`http://localhost:3000/projects/${id}`)
      .then(fetchData())
      .then(response => renderStatistic(response.data))
      .catch(error => console.log(error));
    removeFilter();
  };
};

const removeFilter = () => {
  let alert = document.getElementById("confirm-delete");
  alert.classList.remove("activate");
};

const sort = (status) => {
  projectData.then(response => {
    let sortedArr = sortProject(response.data, status);
    document.getElementById("tbody").innerHTML = "";
    renderProject(sortedArr);
    if (status === "up") {
      document.getElementById("up").classList.add("present");
      document.getElementById("down").classList.remove("present");
    } else {
      document.getElementById("up").classList.remove("present");
      document.getElementById("down").classList.add("present");
    }
  });
};

const sortProject = (project, status) => 
  project.sort((item_1, item_2) => {
    if (status === "up") {
      return item_1.endTime > item_2.endTime ? 1 : -1;
    }
    return item_1.endTime > item_2.endTime ? -1 : 1;
  });

const search = () => {
  let info = document.getElementById("search-box").value;
  projectData.then(response => {
    let project = response.data;
    let searchedProject = project.filter(item => item.name.includes(info));
    document.getElementById("tbody").innerHTML = "";
    renderProject(searchedProject);
  });
};