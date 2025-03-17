import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const element = document.querySelector(".product-list");

const product = new ProductData("tents");
const productList = new ProductList("tents", product, element);
productList.init();
