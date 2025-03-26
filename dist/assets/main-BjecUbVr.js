import { r as s, a as o, l as c } from "./utils-CTOVuiVQ.js";
import { P as n } from "./ProductData-DxiBLfsP.js";
function i(t) {
  return `<li class="product-card">
  <a href="/product_pages/index.html?product=${t.Id}">
  <img
    src="${t.Images.PrimaryMedium}"
    alt="Image of ${t.Name}"
  />
  <h3 class="card__brand">${t.Brand.Name}</h3>
  <h2 class="card__name">${t.Name}</h2>
  <p class="product-card__price">$${t.FinalPrice}</p></a>
</li>`;
}
class l {
  constructor(e, a, r) {
    (this.category = e), (this.dataSource = a), (this.listElement = r);
  }
  async init() {
    const e = await this.dataSource.getData(this.category);
    this.renderList(e),
      (document.querySelector(".title").innerHTML = this.category);
  }
  renderList(e) {
    s(i, this.listElement, e);
  }
}
const d = o("category"),
  m = document.querySelector(".product-list"),
  u = document.querySelector("#category");
u.textContent = d.toUpperCase();
const y = new n("tents"),
  h = new l("tents", y, m);
h.init();
c();
document.addEventListener("DOMContentLoaded", function () {
  const t = document.querySelector(".alert");
  t &&
    ((t.style.display = "block"),
    setTimeout(() => {
      t.style.display = "none";
    }, 5e3));
});
