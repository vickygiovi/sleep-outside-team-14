import { r } from "./utils-BOn2ue7e.js";
import { P as i } from "./ProductData-Dx0C3TkS.js";
function c(t) {
  return `<li class="product-card">
    <a href="product_pages/index.html?product=${t.Id}">
    <img
      src="${t.Image}"
      alt="Image of ${t.Name}"
    />
    <h3 class="card__brand">${t.Brand.Name}</h3>
    <h2 class="card__name">${t.Name}</h2>
    <p class="product-card__price">$${t.FinalPrice}</p></a>
  </li>`;
}
class n {
  constructor(e, a, s) {
    (this.category = e), (this.dataSource = a), (this.listElement = s);
  }
  async init() {
    const e = await this.dataSource.getData();
    this.renderList(e);
  }
  renderList(e) {
    r(c, this.listElement, e);
  }
}
const o = document.querySelector(".product-list"),
  d = new i("tents"),
  l = new n("tents", d, o);
l.init();
