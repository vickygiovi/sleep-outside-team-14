import ProductData from "./ProductData.mjs"
import ProductList from "./ProductList.mjs"
import Alert from "../js/modules/alert.js";

const element = document.querySelector(".product-list")

const product = new ProductData("tents")
const productList = new ProductList("tents", product, element)
productList.init()

const alertInstance = new Alert();
alertInstance.renderAlerts(); 