import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let s=[];function l(e){return`<li data-id="${e.id}">
  <h3>${e.name}</h3>
  <p>${e.phone}</p>
  <p>${e.email}</p>
  <button class='js-btn-delete' type='button'>Delete</button>
</li>`}const c="contact-info";function m(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function d(e,t){const n=localStorage.getItem(e);try{return JSON.parse(n)??t}catch{return n??t}}const o=document.querySelector(".js-contact-form"),r=document.querySelector(".js-contact-list");o.addEventListener("input",()=>{const e=new FormData(o),t={id:Date.now(),name:e.get("name"),phone:e.get("phone"),email:e.get("email")};m(c,t)});document.addEventListener("DOMContentLoaded",e=>{const t=d(c,{});o.elements.name.value=t.name||"",o.elements.phone.value=t.phone||"",o.elements.email.value=t.email||""});o.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(o),n={id:Date.now(),name:t.get("name"),phone:t.get("phone"),email:t.get("email")};s.push(n);const a=l(n);r.insertAdjacentHTML("beforeend",a),localStorage.removeItem(c),o.reset()});r.addEventListener("click",e=>{if(!e.target.classList.contains("js-btn-delete"))return;const t=e.target.closest("li"),n=t.dataset.id,a=s.findIndex(i=>i.id.toString()===n);a!==-1&&s.splice(a,1),t.remove(),console.log(s)});
//# sourceMappingURL=3-contact_book.js.map
