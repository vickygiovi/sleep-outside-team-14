import{g as i,s as r,l as d,a as o}from"./utils-CTOVuiVQ.js";import{P as s}from"./ProductData-DxiBLfsP.js";function c(t){return`<section class="product-detail"> <h3>${t.Brand.Name}</h3>
    <h2 class="divider">${t.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${t.Images.PrimaryLarge}"
      alt="${t.NameWithoutBrand}"
    />
    <p class="product-card__price">$${t.FinalPrice}</p>
    <p class="product__color">${t.Colors[0].ColorName}</p>
    <p class="product__description">
    ${t.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
      <input type="number" name="quantity" id="quantity" placeholder="Quantity">
    </div></section>`}class n{constructor(a,e){this.productId=a,this.product={},this.price=0,this.dataSource=e}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main");let e=document.getElementById("quantity").value;this.product.quantity=parseInt(e),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){let a=i("so-cart");a||(a=[]),a.push(this.product),r("so-cart",a)}renderProductDetails(a){document.querySelector(a).insertAdjacentHTML("afterBegin",c(this.product))}}d();const l=new s("tents"),u=o("product"),p=new n(u,l);p.init();
