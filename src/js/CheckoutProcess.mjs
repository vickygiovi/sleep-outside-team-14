import { getLocalStorage } from "./utils.mjs";  
import ExternalServices from "./ExternalServices.mjs";  

const services = new ExternalServices();  

function formDataToJSON(formElement) {  
    const formData = new FormData(formElement);  
    const convertedJSON = {};  
    formData.forEach((value, key) => {  
        convertedJSON[key] = value;  
    });  
    return convertedJSON;  
}  

export default class CheckoutProcess {  
    constructor() {  
        this.list = [];  
        this.itemTotal = 0;  
        this.shipping = 0;  
        this.tax = 0;  
        this.orderTotal = 0;  
    }  

    init() {  
        this.list = getLocalStorage("so-cart");  
        this.calculateItemSummary();  
        document.querySelector("#checkout").addEventListener("submit", (event) => {  
            console.log("Submitted");  
            event.preventDefault();  
            this.checkout();  
        });  
    }  

    calculateItemSummary() {  
        const summaryElement = document.querySelector("#subtotal");  
        const itemNumElement = document.querySelector("#items");  
        itemNumElement.textContent = "Amount of items: " + this.list.length;  

        const amounts = this.list.map((item) => item.FinalPrice);  
        this.itemTotal = amounts.reduce((sum, item) => sum + item, 0);  
        summaryElement.textContent = `Subtotal: $${this.itemTotal}`;  
        this.calculateOrderTotal();  
    }  

    calculateOrderTotal() {  
        this.tax = (this.itemTotal * 0.06);  
        this.shipping = 10 + (this.list.length - 1) * 2;  
        this.orderTotal = (  
            this.itemTotal +  
            this.tax +  
            this.shipping  
        );  
        this.displayOrderTotals();  
    }  

    displayOrderTotals() {  
        const tax = document.querySelector("#tax");  
        const shipping = document.querySelector("#shipping");  
        const orderTotal = document.querySelector("#order");  

        tax.textContent = `Tax: $${this.tax.toFixed(2)}`;  
        shipping.textContent = `Shipping Estimate: $${this.shipping.toFixed(2)}`;  
        orderTotal.textContent = `Order Total: $${this.orderTotal.toFixed(2)}`;  
    }  

    async checkout() {  
        const formElement = document.forms["checkout"];  
        const order = formDataToJSON(formElement);  
        order.orderDate = new Date().toISOString();  
        order.orderTotal = this.orderTotal;  
        order.tax = this.tax;  
        order.shipping = this.shipping;  
        order.items = this.packageItems(this.list);  

        try {  
            const response = await services.checkout(order);  
            alert("Checkout successful!");  

            // Clear the cart from localStorage  
            localStorage.removeItem("so-cart");  

            // Redirect to success page  
            window.location.href = 'success.html';  
        } catch (err) {  
            console.error(err);  
            alert(err.message); // Show the detailed error message from the server  
        }  
    }  

    packageItems(items) {  
        return items.map((item) => ({  
            id: item.Id,  
            price: item.FinalPrice,  
            name: item.Name,  
            quantity: 1,  
        }));  
    }  
}  

document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {  
    e.preventDefault();  
    const myForm = document.forms[0];  
    const chk_status = myForm.checkValidity();  
    myForm.reportValidity();  
    if (chk_status) 
        myCheckout.checkout();   
    });  
