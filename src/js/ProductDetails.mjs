import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function convertToJson(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Bad Response");
    }
}

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }
    getData() {
        return fetch(this.path)
            .then(convertToJson)
            .then((data) => data);
    }
    async findProductById(id) {
        const products = await this.getData();
        return products.find((item) => item.Id === id);
    }
    async init() {
        this.product = await this.dataSource.findProductById(this.productId);
        document
            .getElementById("addToCart")
            .addEventListener("click", this.addProductToCart.bind(this));
        this.renderProductDetails()
    }
    addProductToCart() {
        const cartItems = getLocalStorage("so-cart") || []; // get cart array of items from local storage if null set to empty array
        cartItems.push(this.product);
        localStorage.setItem("so-cart", cartItems);
    }
    // async addToCartHandler(e) {
    //     const product = await this.dataSource.findProductById(e.target.dataset.id);
    //     this.addProductToCart(product);
    //   }
    renderProductDetails() {
      productDetailsTemplate(this.product);
    }

    
}
function productDetailsTemplate(product) {
    document.querySelector("h2").textContent = product.Category.charAt(0).toUpperCase() + product.Category.slice(1);
    document.querySelector("#p-brand").textContent = product.Brand.Name;
    document.querySelector("#p-name").textContent = product.NameWithoutBrand;
  
    const productImage = document.querySelector("#p-image");
    productImage.src = product.Images.PrimaryExtraLarge;
    productImage.alt = product.NameWithoutBrand;
    const euroPrice = new Intl.NumberFormat("de-DE",
      {
        style: "currency", currency: "EUR",
      }).format(Number(product.FinalPrice) * 0.85);
    document.querySelector("#p-price").textContent = `${euroPrice}`;
    document.querySelector("#p-color").textContent = product.Colors[0].ColorName;
    document.querySelector("#p-description").innerHTML = product.DescriptionHtmlSimple;
  
    document.querySelector("#add-to-cart").dataset.id = product.Id;
  }