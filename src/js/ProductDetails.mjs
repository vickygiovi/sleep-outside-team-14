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
        // use the datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        // the product details are needed before rendering the HTML
        // once the HTML is rendered, add a listener to the Add to Cart button
        // Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings from this week on 'this' to understand why.
        document.getElementById('addToCart')
            .addEventListener('click', this.addProductToCart.bind(this));
        this.renderProductDetails()
    }
    addProductToCart(product) {
        const cartItems = localStorage.getItem("so-cart") || []; // get cart array of items from local storage if null set to empty array
        cartItems.push(product);
        localStorage.setItem("so-cart", cartItems);
    }
    renderProductDetails() {

    }
}
