import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{t as m}from"./assets/vendor-BsGwUR3l.js";const o="feedback-form-state";function r(t,e){const n=JSON.stringify(e);localStorage.setItem(t,n)}function c(t,e){const n=localStorage.getItem(t);try{return JSON.parse(n)??e}catch{return n??e}}//! видалення через функцію
const a=document.querySelector(".js-feedback-form");a.addEventListener("input",m(l,500));function l(){const t=new FormData(a),e={name:t.get("name"),email:t.get("email"),message:t.get("message")};r(o,e)}//! ще один метод
document.addEventListener("DOMContentLoaded",t=>{const e=c(o,{});a.elements.name.value=e.name||"",a.elements.email.value=e.email||"",a.elements.message.value=e.message||""});a.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(a),n={name:e.get("name"),email:e.get("email"),message:e.get("message")};//! ще один метод
console.log(n),localStorage.removeItem(o);//! викликаємо функцію очищеня localStorage
a.reset()});
//# sourceMappingURL=7-feedback_form.js.map
