import { loadHeaderFooter } from "./utils.mjs";

   async ()=> {
    try {
        const orderResult = await services.checkout(this.cart);
        window.location.href = "/checkout/success.html";
        localStorage.removeItem("cart"); // Clear cart on success
    } catch (err) {
        alertMessage(`Order failed: ${err.message.message}`, true); 
    }
}

document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    
    const myForm = document.querySelector("#checkoutForm");
    
    if (!myForm.checkValidity()) { 
        myForm.reportValidity();
        return;
    }
    
    myCheckout.checkout();
});


loadHeaderFooter();