'use strict';

const params = new URLSearchParams(window.location.search);
const movieId = parseInt(params.get("id"));

const movie = movieList.results.find(m => m.id === movieId);
const card = document.querySelector(".card");

if (movie) {
  card.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}" class="img-fluid rounded-start" alt="영화 포스터">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">📆 ${movie.release_date}&nbsp;&nbsp;&nbsp;⭐️ ${movie.vote_average}</p>
          <p class="card-text"></p>
          <p class="card-text">${movie.overview}</p>
        </div>
      </div>
    </div>
  `;
}