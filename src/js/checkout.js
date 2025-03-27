import CheckoutProcess from "./CheckoutProcess.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const order = new CheckoutProcess("so-cart", ".checkout-summary");
order.init();

const buttonForm = document.querySelector("#checkout")
buttonForm.addEventListener("click", (e) => {
    e.preventDefault();
    order.checkout();
})