import ProductData from "../js/ProductData.mjs" 
import ProductList from "../js/ProductList.mjs"
import { loadHeaderFooter, getParam } from "../js/utils.mjs";

loadHeaderFooter();

const category = getParam("category");

const element = document.querySelector(".product-list")

const product = new ProductData()
const productList = new ProductList(category, product, element)
productList.init()
