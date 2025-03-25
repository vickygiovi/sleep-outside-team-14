import { loadHeaderFooter, getParam } from "./utils.mjs";
import ExternalServices from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();
const category = getParam("category");
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();
