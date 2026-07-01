import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{v as l,S as s}from"./assets/vendor-BsGwUR3l.js";function p(t){return`<li data-id="${t.id}">
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
</li>`}function f(t){return t.map(p).join("")}const o=[],u="product-card";function m(t,e){const n=JSON.stringify(e);localStorage.setItem(t,n)}function y(t,e){const n=localStorage.getItem(t);try{return JSON.parse(n)??e}catch{return n??e}}const c=document.querySelector(".js-product-form"),d=document.querySelector(".js-products-list"),g=document.querySelector(".js-total-price"),j=document.querySelector(".js-clear-cart"),a=y(u,[]);a.length&&(o.push(...a),i());//!---------------------------------------------
c.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(c),n={id:l(),name:e.get("name"),price:Number(e.get("price")),quantity:1};if(!n.name||!n.price){s.fire({toast:!0,position:"top-end",icon:"error",title:"Oops...",text:"Please fill all fields!",showConfirmButton:!1,timer:2e3});return}o.push(n),s.fire({toast:!0,position:"top-end",icon:"success",title:"Product added!",showConfirmButton:!1,timer:2e3}),i(),c.reset()});//!-----------------------------------------
d.addEventListener("click",t=>{const e=h(t);if(e){if(t.target.classList.contains("js-increase")&&e.quantity++,t.target.classList.contains("js-decrease")&&e.quantity>1&&e.quantity--,t.target.classList.contains("js-delete-product")){const n=o.findIndex(r=>r.id===e.id);n!==-1&&(o.splice(n,1),s.fire({toast:!0,position:"top-end",icon:"success",title:"Product deleted!",showConfirmButton:!1,timer:2e3}))}i()}});//!----------------------------------------
j.addEventListener("click",()=>{o.length&&(o.length=0,i(),s.fire({toast:!0,position:"top-end",icon:"success",title:"Cart cleared!",showConfirmButton:!1,timer:2e3}))});//!----------------------------------------
function i(){m(u,o),d.innerHTML=f(o),g.textContent=b(o)}function b(t){return t.reduce((e,n)=>e+n.price*n.quantity,0)}function h(t){const e=t.target.closest("li");if(!e)return null;const n=e.dataset.id;return o.find(r=>r.id===n)}
//# sourceMappingURL=8-product_catalog.js.map
