window.onload = () => {
  const keyWord = getKeyWord();
  fillPlaceHolder(keyWord);
  getData().then(response => {
    const searchResult = search(response.data, keyWord);
    if (searchResult.length) {
      renderSearchResult(searchResult);
    } else {
      hintError();
    }
  });
  bindEvent();
};

const getData = () => axios.get("http://localhost:3000/movie");

const bindEvent = () => {
  document.addEventListener("keypress", event => {
    if (event.code === "Enter" && document.getElementById("search-box").value) { 
      startSearch();
    }
  });
};

/*---------functions to render movie--------------*/

const getKeyWord = () => {
  const url = decodeURIComponent(window.location.href);
  const keyWordStr = url.split("=")[1];
  return keyWordStr.split("+");
};

const search = (allMovie, keyWord) =>
  allMovie.filter(movie =>
    keyWord.reduce((temp, key) =>
      temp = temp && (movie.title.includes(key) || movie.id.toString().includes(key) ||
        movie.original_title.includes(key) || movie.directors.includes(key) || movie.casts.includes(key)), true));

const renderSearchResult = (movie) => {
  movie.forEach(item => {
    document.getElementById("search-page").innerHTML += `
    <li class="search-detail">
      <a href="#"><img class="poster" src="${item.image}"/></a>
      <div class="search-info">
        <a class="movie-title" href="#"><span>${item.title} </span><span>${item.original_title} </span><span>(${item.year}) </span></a>
        <div class="rating-box"><img class="star" id="rating-${item.id}" src="./img/star.png" /><span class="movie-rating">${item.rating}</span></div>
        <p class="movie-category"><span>${item.area.split(",").join(" / ")} / </span><span>${item.genres.split(",").join(" / ")}</span></p>
        <p class="movie-creator"><span>${item.directors.split(",").join(" / ")} / </span><span>${item.casts.split(",").join(" / ")}</span></p>
      </div>
    </li>`;
    document.getElementById(`rating-${item.id}`).style.background = "url('./img/star-background.png')";
    document.getElementById(`rating-${item.id}`).style.backgroundPosition = `${item.rating * 7.5}px 0`;
  });
};

const fillPlaceHolder = (keyWord) => {
  const keyWordStr = keyWord.join(" ");
  const placeHolder = Array.from(document.getElementsByClassName("place-holder"));
  placeHolder.forEach(div => div.innerHTML = keyWordStr);
};

const hintError = () => {
  document.getElementById("search-page").innerHTML += "没有找到相关影片";
};

/* ---------functions to start search ------------*/

const startSearch = () => {
  const keyWord = document.getElementById("search-box").value.split(" ");
  let keyWordStr = "";
  keyWord.forEach(word => keyWordStr += `+${word}`);
  keyWordStr = keyWordStr.substring(1);
  window.open(`search.html?q=${keyWordStr}`, "_blank");
};

const backToMainPage = () => {
  window.open("index.html", "_self");
};