import { r as a, a as c, l as u } from "./utils-DSiGNDan.js";
import { P as i } from "./ProductData-NlZDIHen.js";
function n(t) {
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
class h {
  constructor(e, d, m) {
    (this.category = e), (this.dataSource = d), (this.listElement = m);
  }
  async init() {
    const e = await this.dataSource.getData(this.category);
    this.renderList(e),
      (document.querySelector(".title").innerHTML = this.category);
  }
  renderList(e) {
    a(n, this.listElement, e);
  }
  renderResults(e) {
    (this.listElement.innerHTML = ""), a(n, this.listElement, e);
  }
}
const r = c("category"),
  s = c("search"),
  p = document.querySelector(".product-list"),
  l = document.querySelector("#category");
l.textContent = r.toUpperCase();
l.textContent = s ? "SEARCH RESULTS" : r ? r.toUpperCase() : "TOP PRODUCTS";
const y = new i("tents"),
  o = new h("tents", y, p);
s
  ? i
      .getData(s)
      .then((t) => {
        o.renderResults(t);
      })
      .catch((t) => console.error(t))
  : r && o.init();
u();
document.addEventListener("DOMContentLoaded", function () {
  const t = document.querySelector(".alert");
  t &&
    ((t.style.display = "block"),
    setTimeout(() => {
      t.style.display = "none";
    }, 5e3));
});
