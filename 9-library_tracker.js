import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{v as k,S as l}from"./assets/vendor-BsGwUR3l.js";function g(t){return`<li data-id="${t.id}">
  <h3>${t.title}</h3>

  <p>
    ${t.author}
  </p>

  <p>
    ${t.status}
  </p>

  <button
    class="js-btn-delete"
    type="button"
  >
    Delete
  </button>
</li>`}function i(t){return t.map(g).join("")}const s=[],c="library-tracker";function d(t,o){const e=JSON.stringify(o);localStorage.setItem(t,e)}function b(t,o){const e=localStorage.getItem(t);try{return JSON.parse(e)??o}catch{return e??o}}const a=document.querySelector(".js-book-form"),r=document.querySelector(".js-book-list"),f=document.querySelector(".js-search-book"),m=document.querySelector(".js-filter-status"),u=b(c,[]);u.length&&(s.push(...u),r.innerHTML=i(s));a.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(a),e={id:k(),title:o.get("title"),author:o.get("author"),status:o.get("status")};if(console.log(e),!e.title||!e.author){l.fire({toast:!0,position:"top-end",icon:"error",title:"Oops...",text:"Please fill all fields!",showConfirmButton:!1,timer:2e3});return}s.push(e),l.fire({toast:!0,position:"top-end",icon:"success",title:"Book added!",showConfirmButton:!1,timer:2e3}),r.innerHTML=i(s),d(c,s),a.reset()});r.addEventListener("click",t=>{if(!t.target.classList.contains("js-btn-delete"))return;console.log(t.target);const e=t.target.closest("li").dataset.id,n=s.findIndex(h=>h.id===e);n!==-1&&(s.splice(n,1),d(c,s),l.fire({toast:!0,position:"top-end",icon:"success",title:"Book deleted!",showConfirmButton:!1,timer:2e3})),r.innerHTML=i(s)});f.addEventListener("input",p);m.addEventListener("change",p);function p(){const t=f.value.toLowerCase().trim(),o=m.value;let e=s;e=e.filter(n=>n.title.toLowerCase().includes(t)),o!=="All"&&(e=e.filter(n=>n.status===o)),r.innerHTML=i(e)}
//# sourceMappingURL=9-library_tracker.js.map
