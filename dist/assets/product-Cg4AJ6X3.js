import { g as d, s, a as r, l as i } from "./utils-DSiGNDan.js";
import { P as o } from "./ProductData-NlZDIHen.js";
function c(t) {
  const a =
      ((t.SuggestedRetailPrice - t.FinalPrice) / t.SuggestedRetailPrice) * 100,
    e = a > 0 ? `<div class= "discount-badge">-${Math.round(a)}%</d>` : "";
  return `<section class="product-detail"> <h3>${t.Brand.Name}</h3>
    <h2 class="divider">${t.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${t.Images.PrimaryLarge}"
      alt="${t.NameWithoutBrand}"
    />
    <p class="product-card__price">$${t.FinalPrice}
     ${e}
    </p>
    <p class="product__color">${t.Colors[0].ColorName}</p>
    <p class="product__description">
    ${t.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </div></section>`;
}
class n {
  constructor(a, e) {
    (this.productId = a), (this.product = {}), (this.dataSource = e);
  }
  async init() {
    (this.product = await this.dataSource.findProductById(this.productId)),
      this.renderProductDetails("main"),
      document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCart.bind(this));
  }
  addToCart() {
    let a = d("so-cart");
    a || (a = []), a.push(this.product), s("so-cart", a);
  }
  renderProductDetails(a) {
    document.querySelector(a).insertAdjacentHTML("afterBegin", c(this.product));
  }
}
const l = new o("tents"),
  u = r("product"),
  m = new n(u, l);
m.init();
i();
