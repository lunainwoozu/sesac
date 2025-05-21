'use strict';

const form = document.querySelector("form");
const list = document.getElementById("list");

const searchList = document.querySelector(".search-list");
const movies = movieList.results;

const keywordInput = document.getElementById("keywordInput");

//이미지 기본 url https://image.tmdb.org/t/p/w440_and_h660_face

function searchMovie(){
	const keyword = document.getElementById('keywordInput').value.toLowerCase();
  const filtered = movies.filter((movie) =>  movie.title.toLowerCase().includes(keyword));

  if (!keyword) {
    alert('영화 제목을 입력해 주세요.');
    return;
  }
	searchList.innerHTML = "";
	
	if (filtered.length === 0) {
    list.style.display = 'none';
    showAlert();
    form.reset();
		return;
	} else {
    filtered.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("cols-md-4");
      card.innerHTML = `
        <div class="card col">
        <img src="https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}" class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">개봉일 ${movie.release_date}<br />평점 ${movie.vote_average} 👍</p>
            <a class="btn btn-primary nextButton" href="zuflix-detail.html?id=${movie.id}">상세보기</a>
        </div>`;
      searchList.appendChild(card);
      list.style.display = 'block';
      let goScroll = document.querySelector("#list").offsetTop;
      window.scrollTo({top:goScroll, behavior:'smooth'});
      form.reset();
    });
  }
}

keywordInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchMovie();
  }
});

const alert = document.querySelector(".alert")
const showAlert = () => {
  alert.classList.add('show');
  setTimeout(() => {
    alert.classList.remove('show');
  }, 2000)
}