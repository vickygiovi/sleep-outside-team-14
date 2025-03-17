import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParam } from "./utils.mjs";

const category = getParam("category");
const element = document.querySelector(".product-list");
const title = document.querySelector("#category");
title.textContent = category.toUpperCase();

const product = new ProductData("tents");
const productList = new ProductList("tents", product, element);
productList.init();
