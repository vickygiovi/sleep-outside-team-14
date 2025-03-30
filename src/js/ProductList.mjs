import ProductDetails from "./ProductDetails.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="/product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
  <button class="quick-view" data-id="${product.Id}">Quick View</button>
</li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData(this.category);
    // render the list
    this.renderList(list);
    // Add listeners for quick view buttons
    this.addQuickViewListeners();
    //set the title to the current category
    document.querySelector(".title").innerHTML = this.category;
  }
  // render after doing the first stretch
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }

  // Method to render results under different contexts
  renderResults(results) {
    // Clear previous results
    this.listElement.innerHTML = "";
    if (results.length > 0) {
      // Render results
    renderListWithTemplate(productCardTemplate, this.listElement, results);
    } else {
    this.listElement.innerHTML = "<li>No results found.</li>";
    }
  }

  // Quick view function  
  async showQuickView(productId) {  
    const productDetails = new ProductDetails(productId, this.dataSource);  
    
    // Fetch product details  
    await productDetails.init();  
    
    // Get the product detail HTML  
    const productHtml = productDetails.renderProductDetails();  

    // Clear previous content and set new content  
    const productModal = document.getElementById('product-modal');  
    productModal.querySelector('.product-detail-content').innerHTML = productHtml;  

    // Show the modal  
    productModal.classList.remove('hidden');  
    productModal.classList.add('visible');  

    // Close modal when close button is clicked  
    document.getElementById('closeModal').addEventListener('click', () => {  
      this.closeModal();  
    });  

    // Close modal when clicking outside of it  
    window.addEventListener('click', (event) => {  
      const productModal = document.getElementById('product-modal');  
      if (event.target === productModal) {  
        this.closeModal();  
      }  
    });  
  }  

  // Function to close the modal  
  closeModal() {  
    const productModal = document.getElementById('product-modal');  
    productModal.classList.remove('visible');  
    productModal.classList.add('hidden');  
    
    // Clear the content when the modal is closed, if desired (optional)  
    productModal.querySelector('.product-detail-content').innerHTML = '';  
  }  

  addQuickViewListeners() {  
    const quickViewButtons = this.listElement.querySelectorAll('.quick-view');  
    quickViewButtons.forEach(button => {  
      button.addEventListener('click', (event) => {  
        const productId = event.target.getAttribute('data-id');  
        this.showQuickView(productId);  
      });  
    });  
  }    

  // render before doing the stretch
  // renderList(list) {
  //   const htmlStrings = list.map(productCardTemplate);
  //   this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
  // }
}