'use strict';

const songList = [
  "너에게 닿기를",
  "like JENNIE",
  "Drowning",
  "모르시나요(PROD.로코베리)",
  "TOO BAD",
  "HOME SWEET HOME",
  "나는 반딧불",
  "Whiplash",
  "REBEL HEART",
  "HOT",
];

// const list_array = document.querySelector(".list-array");
// list_array.innerHTML = "";

// for (let i = 0; i < songList.length; i++){
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.innerHTML = `
//     <span>${i + 1}. ${songList[i]}</span>
//   `;
//   list_array.appendChild(listItem);
// }

// let i = 0; // 초기식
// while (i < songList.length){ //조건식
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.innerHTML = `
//     <span>${i + 1}. ${songList[i]}</span>
//   `;
//   list_array.appendChild(listItem); //반복식
//   i++; //증감식
// }

// songList.forEach((_, i) => {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.innerHTML = `<span>${i + 1}. ${songList[i]}`;
//   list_array.appendChild(listItem);
// });
// songList.forEach((song, i) => {
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.innerHTML = `<span>${i + 1}. ${song}`;
//   list_array.appendChild(listItem);
// });

// let num = 1;
// for (let i of songList){
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.innerHTML = `<span>${num}. ${i}`;
//   list_array.appendChild(listItem);
//   num++;
// }


const songDetails = {
  "너에게 닿기를": { artist: "10CM", likes: 58471 },
  "like JENNIE": { artist: "제니", likes: 76168 },
  "Drowning": { artist: "WOODZ", likes: 189248 },
  "모르시나요(PROD.로코베리)": { artist: "조째즈", likes: 70040 },
  "TOO BAD": { artist: "G-DRAGON", likes: 146178 },
  "HOME SWEET HOME": { artist: "G-DRAGON", likes: 211539 },
  "나는 반딧불": { artist: "황가람", likes: 141198 },
  "Whiplash": { artist: "aespa", likes: 132606 },
  "REBEL HEART": { artist: "IVE (아이브)", likes: 98429 },
  "HOT": { artist: "LE SSERAFIM (르세라핌)", likes: 35001 },
};

//- 기본 출력의 경우:  객체 데이터 순서대로 출력
const list_object = document.querySelector(".list-object");
list_object.innerHTML = "";
drawList();

// for (let song in songDetails){
//   const listItem = document.createElement("li");
//   listItem.classList.add("list-group-item");
//   listItem.innerHTML = `
//     <strong>${song}</strong><br /> 
//     가수 ${songDetails[song].artist} | 좋아요 ${songDetails[song].likes} 👍
//   `;
//   list_object.appendChild(listItem);
// }

//- 좋아요가 6만개 이상인 객체 값만 출력
//- 정렬 버튼 클릭 시 좋아요가 많은 순서대로 카드 출력

// const list_like = document.querySelector(".list-like");
// list_like.innerHTML = "";

// for (let song in songDetails){
//   if (songDetails[song].likes > 60000) {
//     const listItem = document.createElement("li");
//     listItem.classList.add("list-group-item");
//     listItem.innerHTML = `
//       <strong>${song}</strong><br /> 
//       가수 ${songDetails[song].artist} | 좋아요 ${songDetails[song].likes} 👍
//     `;
//     list_like.appendChild(listItem);
//   }
// }

//- 노래 추가하기 버튼 클릭 시 곡이름, 가수, 좋아요 수 표시
const input = document.querySelectorAll("input");
const list_added = document.querySelector(".list-added");
const addedSong = [];

function addSong(){// 추가하기 버튼이 눌렸을 때 동작
  let songTitle = document.getElementById("songTitle").value;
  let artistName = document.getElementById("artistName").value;
  let likeNumber = document.getElementById("likeNumber").value;

  if (songTitle && artistName && likeNumber){
    const newSong = {
      songTitle,
      artistName,
      likeNumber
    };

    addedSong.push(newSong);

    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `
      <strong>${songTitle}</strong><br /> 
      가수 ${artistName} | 좋아요 ${likeNumber} 👍
    `;
    list_added.appendChild(listItem);

    input[0].value = null;
    input[1].value = null;
    input[2].value = null;
  } else {
    alert("입력되지 않은 값이 있습니다.");
  }
}

function addSong2() {
  let songTitle = document.getElementById("songTitle").value;
  let artistName = document.getElementById("artistName").value;
  let likeNumber = document.getElementById("likeNumber").value;

  if (songTitle && artistName && likeNumber){
    songDetails[songTitle] = {
      artist: artistName,
      likes: likeNumber,
    };
    drawList();

    input[0].value = null;
    input[1].value = null;
    input[2].value = null;
  } else {
    alert("입력되지 않은 값이 있습니다.");
  }
  
}

function drawList(){
  for (let song in songDetails){
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `
      <strong>${song}</strong><br /> 
      가수 ${songDetails[song].artist} | 좋아요 ${songDetails[song].likes} 👍
    `;
    list_object.appendChild(listItem);
  }
}