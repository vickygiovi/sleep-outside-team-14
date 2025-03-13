import{g as c}from"./utils-BSo-3QCx.js";/* empty css              */function o(){let t=document.querySelector(".cart-footer"),a=JSON.parse(localStorage.getItem("so-cart"))||[];a.length>0?t.style.display="block":t.style.display="none";let e=0;a.forEach(r=>{e=e+r.FinalPrice}),t.children[0].textContent="Total: $"+e}window.addEventListener("load",o);function l(){const a=c("so-cart").map(e=>s(e));document.querySelector(".product-list").innerHTML=a.join("")}function s(t){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
</li>`}l();
