const backToMainPage = () => {
  window.open("index.html", "_self");
};

const startSearch = () => {
  const keyWord = document.getElementById("search-box").value.split(" ");
  let keyWordStr = "";
  keyWord.forEach(word => keyWordStr += `+${word}`);
  keyWordStr = keyWordStr.substring(1);
  window.open(`../search.html?q=${keyWordStr}`, "_blank");
};

const bindEvent = () => {
  document.addEventListener("keypress", event => {
    if (event.code === "Enter" && document.getElementById("search-box").value) { 
      startSearch();
    }
  });
};

bindEvent();