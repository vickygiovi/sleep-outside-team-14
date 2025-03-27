import{g as r,s as d,a as i,r as s,l as o,b as c}from"./utils-C7kjnMTT.js";import{P as n}from"./ProductData-DxiBLfsP.js";function l(t){return`<section class="product-detail"> <h3>${t.Brand.Name}</h3>
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
    </div></section>`}class u{constructor(a,e){this.productId=a,this.product={},this.dataSource=e}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main");let e=document.getElementById("quantity").value;this.product.quantity=parseInt(e),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){let a=r("so-cart");a||(a=[]),a.push(this.product),d("so-cart",a),i("Cart updated"),setTimeout(5e3,{removeAllAlerts:s})}renderProductDetails(a){document.querySelector(a).insertAdjacentHTML("afterBegin",l(this.product))}}o();const p=new n("tents"),m=c("product"),h=new u(m,p);h.init();
