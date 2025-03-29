import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const category = getParam("category");
// Fetching the search query
const searchQuery = getParam("search");
const element = document.querySelector(".product-list");
const title = document.querySelector("#category");
title.textContent = category.toUpperCase();

// Set the title based on the category or search
title.textContent = searchQuery
  ? "SEARCH RESULTS"
  : category
    ? category.toUpperCase()
    : "TOP PRODUCTS";

const product = new ProductData("tents");
const productList = new ProductList("tents", product, element);

// If search query is present, fetch and display results
if (searchQuery) {
  product.getData(searchQuery)
    .then((results) => {
      console.log("Search Results:", results);
      // Render search results
      productList.renderResults(results);
      // Handle errors
    })
    .catch((err) => console.error(err));
} else if (category) {
  // Load products based on category
  productList.init();
}

loadHeaderFooter();

document.addEventListener("DOMContentLoaded", function () {
  const alertBox = document.querySelector(".alert");

  if (alertBox) {
    alertBox.style.display = "block"; // Show the alert
    setTimeout(() => {
      alertBox.style.display = "none"; // Hide after 5 seconds
    }, 5000);
  }
});
