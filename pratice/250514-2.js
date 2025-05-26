'use strict';

const form = document.querySelector("form");
const userList = document.querySelector(".user-list");

const users = [];

function addUser() {
  // 추가하기 버튼이 눌렸을 때 동작
  const username = document.getElementById("username").value;
  const status = document.getElementById("status").value;

  const newUser = {
    username,
    status,
  };

  users.push(newUser);
  // user

  updateUserList();
  updateStatus();
  updateUser();
}
// html 그리는 역할할
function updateUserList() {
  userList.innerHTML = "";
  users.forEach((user, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "d-flex", "justify-content-between");
    listItem.innerHTML = `
      <span>${user.username} - ${user.status}</span>
      <button class="btn btn-sm btn-outline-primary" onclick="sendMessage('${user.username}')">📩 메시지</button>
    `;
    userList.appendChild(listItem);
  });
  if (users.length === 0) {
    userList.innerHTML = '<li class="list-group-item text-muted">사용자가 없습니다.</li>';
  }
}

function updateUser() {
  const totalUsers = document.getElementById("totalUsers");
  totalUsers.textContent = `${users.length}명`;
}

function updateStatus() {
  const activeUsers = document.getElementById("activeUsers");
  let user = 0;
  for (let a = 0; a < users.length; a++) {
    if (users[a].status === "활성") {
      user++;
    }
  }
  activeUsers.textContent = `${user}명`;
}