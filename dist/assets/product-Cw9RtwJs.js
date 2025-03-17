import { a as e } from "./utils-BOn2ue7e.js";
import { P as s } from "./ProductData-Dx0C3TkS.js";
function c(o) {
  if (o.ok) return o.json();
  throw new Error("Bad Response");
}
class n {
  constructor(t, r) {
    (this.productId = t), (this.product = {}), (this.dataSource = r);
  }
  getData() {
    return fetch(this.path)
      .then(c)
      .then((t) => t);
  }
  async findProductById(t) {
    return (await this.getData()).find((d) => d.Id === t);
  }
  async init() {
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCartHandler.bind(this)),
      this.renderProductDetails();
  }
  addProductToCart(t) {
    const r = JSON.parse(localStorage.getItem("so-cart")) || [];
    r.push(t), localStorage.setItem("so-cart", JSON.stringify(r));
  }
  async addToCartHandler(t) {
    const r = await this.dataSource.findProductById(t.target.dataset.id);
    this.addProductToCart(r);
  }
  renderProductDetails() {}
}
const a = new s("tents");
console.log(a);
const i = e("product"),
  u = new n(i, a);
u.init();
