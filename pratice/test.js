const form = document.querySelector("form");
const ul = document.querySelector("#messageList");

if (ul.children.length === 0) ul.style.display = "none";

document.querySelector("button[type=submit]").addEventListener('click', function(e){
  e.preventDefault();

  const name = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if(name && email && message){
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `<b>${name} (${email})</b><br>${message}`;

    ul.append(li);
    ul.style.display = "block";
    form.reset();
  } else {
    alert("모든 값을 입력해야 합니다.");
  }
})

function clearForm(){
  //console.log(ul.children);
  const li = ul.children;

  ul.removeChild(li[ul.children.length - 1]);

  //console.log(ul.children);

  if (ul.children.length === 0) ul.style.display = "none";
}