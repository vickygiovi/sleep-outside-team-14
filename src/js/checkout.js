import CheckoutProcess from "./CheckoutProcess.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const check = new CheckoutProcess();
check.init();

loadHeaderFooter();

// function cartWithItems() {
//     let cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];

//     let total = 0;
//     cartItems.forEach((elem) => {
//       total = total + elem.FinalPrice;
//     });

//     total = total.toFixed(2)

//     return total;
// }

// function tax() {
//     let tax = cartWithItems() * 0.06
//     return tax.toFixed(2)
// }

// function shipping() {
//     let cartItems = JSON.parse(localStorage.getItem("so-cart")) || [];
//     let shipping = 0
//     cartItems.forEach((elem, index) => {
//         if (index === 0) {
//             shipping = shipping + 10
//         } else {
//             shipping = shipping + 2
//         }

//     });
//     return shipping
// }

// function calculateOrderTotal() {
//     return parseFloat(cartWithItems()) + parseFloat(tax()) + parseFloat(shipping())
// }

// document.getElementById("subtotal").textContent = "Subtotal: $" + cartWithItems()
// document.getElementById("tax").textContent = "Tax: $" + tax()
// document.getElementById("shipping").textContent = "Shipping Estimate: $" + shipping()
// document.getElementById("order").textContent = "Order Total: $" + calculateOrderTotal()