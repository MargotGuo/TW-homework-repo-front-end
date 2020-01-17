window.onload = () => {
  const movieId = getMovieId();
  getData(movieId).then(response => {
    renderMovieDetail(response.data);
    renderMovieIntro(response.data);
    renderSimilarMovie(response.data);
  });
};

const getData = (id) => axios.get(`http://localhost:3000/movie/${id}`);
const getAll = () => axios.get("http://localhost:3000/movie/");

const getMovieId = () => {
  const url = decodeURIComponent(window.location.href);
  const movieId = url.split("=")[1];
  return movieId;
};

const renderMovieDetail = (movie) => {
  document.getElementById("information").innerHTML = `
    <h1 class="page-title"><span>${movie.title} </span><span class="year">(${movie.year})</span></h1>
    <div class="basic-info">
      <img class="poster" src="${movie.image}" />
      <div class="detail">
        <p>导演：${movie.directors.split(",").join(" / ")}</p>
        <p>主演：${movie.casts.split(",").join(" / ")}</p>
        <p>类型：${movie.genres.split(",").join(" / ")}</p>
        <p>制片国家/地区：${movie.area.split(",").join(" / ")}</p>
        <p>上映日期：${movie.year}</p>
        <p>又名：${movie.original_title}</p>
      </div>
      <div class="rating">
        <p class="rating-title">思沃评分</p>
        <p class="rating-value">${movie.rating}</p>
        <img class="star" id="rating-${movie.id}" src="./img/star.png" />
      </div>
    </div>`;
  document.getElementById(`rating-${movie.id}`).style.background = "url('./img/star-background.png')";
  document.getElementById(`rating-${movie.id}`).style.backgroundPosition = `${movie.rating * 7.5}px 0`;
};

const renderMovieIntro = (movie) => {
  document.getElementById("intro").innerHTML = `
  <h2>${movie.title}的剧情简介 · · · · ·</h2>
  <p class="intro-text">${movie.intro ? movie.intro : "暂无剧情简介"}</p>
  `;
};

const renderSimilarMovie = (movie) => {
  getAll().then(response => {
    const allMovie = response.data;
    const similarMovie = getSimilarMovie(movie, allMovie);
    renderMovie(similarMovie, document.getElementById("similar-movie"));
  });
};

const getIntersection = (collection_a, collection_b) =>
  collection_b.filter(current => collection_a.includes(current));

const getSimilarMovie = (movie, allMovie) => allMovie.filter(item => {
  const genresArr = movie.genres.split(",");
  const areaArr = movie.area.split(",");
  const itemGenrsArr = item.genres.split(",");
  const itemAreaArr = item.area.split(",");
  const genresIntersection = getIntersection(genresArr, itemGenrsArr);
  const areaIntersection = getIntersection(areaArr, itemAreaArr);
  if (genresIntersection.length >=2 && areaIntersection.length) {
    return true;
  }
  return false;
});

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

const startDetail = (node) => {
  const movieId = node.name;
  window.open(`detail.html?q=${movieId}`, "_blank");
};