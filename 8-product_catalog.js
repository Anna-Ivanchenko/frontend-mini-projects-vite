import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{v as r}from"./assets/vendor-BsGwUR3l.js";function a(t){return`<li data-id="${t.id}">
  <h3>${t.name}</h3>

  <p>Price: ${t.price} грн</p>

  <div class="quantity-controls">
    <button class="js-decrease" type="button">−</button>

    <span>${t.quantity}</span>

    <button class="js-increase" type="button">+</button>
  </div>

  <button class="js-delete-product" type="button">
    Delete
  </button>
</li>`}function c(t){return t.map(a).join("")}const o=[],s=document.querySelector(".js-product-form"),i=document.querySelector(".js-products-list");s.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(s),n={id:r(),name:e.get("name"),price:e.get("price"),quantity:1};console.log(n),o.push(n),i.innerHTML=c(o)});
//# sourceMappingURL=8-product_catalog.js.map
