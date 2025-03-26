import { loadHeaderFooter } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess";

loadHeaderFooter();

const myCheckout = new CheckoutProcess()

document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    const myForm = document.forms["checkout"];
    const chk_status = myForm.checkValidity();
    myForm.reportValidity();
    if (chk_status)
        myCheckout.checkout();
        window.location.href = "sucess.html"
        localStorage.clear()
});