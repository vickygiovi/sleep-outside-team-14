// Temporary edit to trigger pull request

import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

function cartWithItems() {
  let totalElem = document.querySelector(".cart-footer");
  let cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];
  if (cartItems.length > 0) {
    // alert("There are items")
    totalElem.style.display = "block";
  } else {
    // alert("There are no items")
    totalElem.style.display = "none";
  }
  let total = 0;
  cartItems.forEach((elem) => {
    total = total + elem.FinalPrice;
  });

  totalElem.children[0].textContent = "Total: $" + total;
}

window.addEventListener("load", cartWithItems);

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function removeItem(id) {
  let cartItems = getLocalStorage("so-cart");
  let cartItemsRemoved = cartItems.filter((item) => item.Id != id);
  setLocalStorage("so-cart", cartItemsRemoved);
  renderCartContents();
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
  <button class="remove" id="${item.Id}">X</button>
</li>`;

  return newItem;
}

renderCartContents();
loadHeaderFooter();

const removeButton = document.querySelectorAll(".remove");
removeButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    let productid = event.target.id;
    removeItem(productid);
  });
});
