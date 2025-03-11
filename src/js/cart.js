import { getLocalStorage } from "./utils.mjs";

function cartWithItems() {
  let totalElem = document.querySelector(".cart-footer")
  let cartItems = JSON.parse(localStorage.getItem("so-cart")) || []
  if (cartItems.length > 0) {
    // alert("There are items")
    totalElem.style.display = "block"
  } else {
    // alert("There are no items")
    totalElem.style.display = "none"
  }
  let total = 0
  cartItems.forEach(elem => {
    total = total + elem.FinalPrice
  });

  totalElem.children[0].textContent = "Total: $" + total
}

window.addEventListener("load", cartWithItems)

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
