import{g as d,s as o,l as r,a as s}from"./utils-CTOVuiVQ.js";import{P as i}from"./ProductData-DxiBLfsP.js";function c(t){return`<section class="product-detail"> <h3>${t.Brand.Name}</h3>
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
    </div></section>`}class n{constructor(a,e){this.productId=a,this.product={},this.dataSource=e}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){let a=d("so-cart");a||(a=[]),a.push(this.product),o("so-cart",a)}renderProductDetails(a){document.querySelector(a).insertAdjacentHTML("afterBegin",c(this.product))}}r();const l=new i("tents"),u=s("product"),p=new n(u,l);p.init();r();
