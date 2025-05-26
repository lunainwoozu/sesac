let total = 0;
const cart_list = document.getElementById("cart-list");
const totalPrice = document.getElementById("total-price");


//선택한 버튼이 있는 영역에서만 작동됨! 걱정하지 말자!
function addProduct(){
  const productName = document.querySelector(".card-title").textContent;
  const productPrice = document.querySelector(".card-subtitle").textContent;
  const li = document.createElement("li");
  li.textContent = `${productName} - ${productPrice}`;
  li.classList.add("list-group-item");

  const price = Number(productPrice.substring(1));
  total = total + price;

  totalPrice.textContent = `총 금액: ${total} 원`;
  totalPrice.classList.add("mb-2");
  cart_list.appendChild(li);
}

function addToCart(productName, productPrice){
  const li = document.createElement("li");
  li.textContent = `${productName} - ${productPrice}`;
  li.classList.add("list-group-item");

  console.log(productName);

  const price = productPrice;
  total = total + price;

  totalPrice.textContent = `총 금액: ${total} 원`;
  cart_list.appendChild(li);
}