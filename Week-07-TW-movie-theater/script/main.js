window.onload = () => {
  getData().then(response => {
    renderMainPageMovie(response.data, "year");
    renderMainPageMovie(response.data, "rating");
    renderMainPageMovie(response.data, "random");
    renderCategory(response.data, "genres");
    renderCategory(response.data, "area");
    renderCategory(response.data, "year");
  });
};

const getData = () => axios.get("http://localhost:3000/movie");

/* -------functions for movie page ----------*/

const renderMainPageMovie = (allMovie, flag) => {
  const targetDiv = document.getElementById(`display-${flag}`);
  targetDiv.innerHTML = "";
  let targetMovie;
  if (flag !== "random") {
    targetMovie = allMovie.sort((movie_1, movie_2) =>
      movie_1[flag] > movie_2[flag] ? -1 : 1).slice(0, 12);
  } else {
    targetMovie = getRandomMovie(allMovie, 12);
  }
  renderMovie(targetMovie, targetDiv);
};

const renderMovie = (movieArray, targetDiv) => {
  movieArray.forEach(movie => {
    targetDiv.innerHTML +=
      `<div class="movie-detail">
        <a name="${movie.id}" onclick="startDetail(this)"><img src="${movie.image}" class="movie-poster" /></a>
        <a name="${movie.id}" onclick="startDetail(this)" class="movie-title">${movie.title}
          <span class="movie-rate">${movie.rating}</span>
        </a>
      </div>`;
  });
};

const getRandomMovie = (movieArray, len) => {
  const result = [];
  while (result.length !== len) {
    const item = movieArray[Math.floor(Math.random() * movieArray.length)];
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const switchMovie = () =>
  getData().then(response => renderMainPageMovie(response.data, "random"));

/* ---------functions for aside page ------------*/

const renderCategory = (movie, flag) => {
  const movieArray = sortMovie(countMovie(movie, flag), flag);
  const targetDiv = document.getElementById(`classify-${flag}`);
  movieArray.forEach((movie, index) => targetDiv.innerHTML +=
    `<a onclick="showCategory(this)" class=${index < 5 ? "" : "hidden"}>${movie.key} (${movie.count})</a>`);
};

const countMovie = (allMovie, flag) => {
  const result = {};
  allMovie.forEach(movie => {
    if (flag !== "year") {
      const classifyArr = movie[flag].split(",");
      classifyArr.forEach(item => result[item] ? result[item]++ : result[item] = 1);
    } else {
      const time = movie.year;
      const timeRange = `${(Math.floor(Number(time) / 10) * 10)} - ${(Math.floor(Number(time) / 10) * 10 + 9)}`;
      result[timeRange] ? result[timeRange]++ : result[timeRange] = 1;
    }
  });
  return result;
};

const sortMovie = (moiveObj, flag) => {
  const keyArr = Object.keys(moiveObj);
  const movieArr = keyArr.map(key => ({
    key,
    count: moiveObj[key]
  }));
  if (flag !== "year") {
    return movieArr.sort((movie_1, movie_2) => movie_1.count > movie_2.count ? -1 : 1);
  }
  return movieArr.sort((movie_1, movie_2) =>
    movie_1.key.substring(0, 4) > movie_2.key.substring(0, 4) ? -1 : 1);
};

/*---------functions to classify movies-------------*/

const renderAllMovie = () => {
  reLayoutMainPage("全部影片");
  getData().then(response => {
    renderMovie(response.data, document.getElementById("display"));
  });
  window.scrollTo(0, 0);
};

const showCategory = (node) => {
  const category = node.innerHTML.split(" ")[0];
  reLayoutMainPage(category);
  getData().then(response => {
    const requiredMovie = response.data.filter(movie =>
      movie.area.includes(category) ||
      movie.genres.includes(category) ||
      (Number(movie.year) >= Number(category) && Number(movie.year) <= Number(category) + 9));
    renderMovie(requiredMovie, document.getElementById("display"));
  });
  window.scrollTo(0, 0);
};

const reLayoutMainPage = (category) => {
  document.getElementById("main").innerHTML = `
  <section class="movie-section">
    <p class="movie-section-class">${category}</p>
    <div id="display" class="movie-display"></div>
  </section>`;
};

/* ---------functions to start sub-page ------------*/

const startDetail = (node) => {
  const movieId = node.name;
  window.open(`detail.html?q=${movieId}`, "_blank");
};