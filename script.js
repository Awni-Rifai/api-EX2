"use strict";
const state = {
  recipe: [],
};

const getTrendingMovies = async function (url) {
  const data = await (await fetch(url)).json();
  return data.results;
};

let i = 0;

(async function () {
  state.recipe = await getTrendingMovies(
    "https://api.themoviedb.org/3/tv/popular?api_key=49db1085a6a35f8e9ea7bd9fc8ad2868"
  );
  console.log(state.recipe);
  function slider() {
    const result = state.recipe[i];

    const markup = `   <div class="featured-container">
  <div class="poster">
    <img
      src="https://image.tmdb.org/t/p/w500${result.poster_path}"
      alt=""
    />
  </div>
  <div class="movie-content">
    <div class="movie-title-rating-year">
      <div class="movie-name-year">
        <h1 class="movie-name">${result.name}</h1>
        <h3 class="movie-year">${result.first_air_date.slice(0, 4)}</h3>
      </div>
  
      <h2 class="movie-rating">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/star--v2.png"
        />
        <span class="movie-rating-number">${result.vote_average}</span>
      </h2>
    </div>
    <div class="movie-info">
      <p>
        Origin Country:<span class="movie-country-name"
          >${result.origin_country}</span
        >
      </p>
      <p>langauge: <span class="movie-langauge">English</span></p>
      <p>
        overview:
        <span>
          ${result.overview}</span
        >
      </p>
    </div>
    <button class="btn learn-more">learn more</button>
  </div>
  </div>`;
    document
      .querySelector(".container")
      .insertAdjacentHTML("afterbegin", markup);

    if (i < state.recipe.length - 1) i++;
    else i = 0;
    setTimeout(function () {
      const container = document.querySelector(".featured-container");
      container.style.opacity = "0";

      setTimeout(function () {
        container.style.display = "none";
        slider();
      }, 1000);
    }, 3000);
  }
  slider();
})();

// //
// //if (result.original_language !== "en") return;
