import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{v as k,S as i}from"./assets/vendor-BsGwUR3l.js";function b(t){return`<li data-id="${t.id}">
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
</li>`}function a(t){return t.map(b).join("")}const o=[],l="library-tracker";function u(t,s){const e=JSON.stringify(s);localStorage.setItem(t,e)}function g(t,s){const e=localStorage.getItem(t);try{return JSON.parse(e)??s}catch{return e??s}}const c=document.querySelector(".js-book-form"),r=document.querySelector(".js-book-list"),f=document.querySelector(".js-search-book"),m=document.querySelector(".js-filter-status"),L=document.querySelector(".js-clear-all-books"),d=g(l,[]);d.length&&(o.push(...d),r.innerHTML=a(o));c.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(c),e={id:k(),title:s.get("title"),author:s.get("author"),status:s.get("status")};if(console.log(e),!e.title||!e.author){i.fire({toast:!0,position:"top-end",icon:"error",title:"Oops...",text:"Please fill all fields!",showConfirmButton:!1,timer:2e3});return}o.push(e),i.fire({toast:!0,position:"top-end",icon:"success",title:"Book added!",showConfirmButton:!1,timer:2e3}),r.innerHTML=a(o),u(l,o),c.reset()});r.addEventListener("click",t=>{if(!t.target.classList.contains("js-btn-delete"))return;console.log(t.target);const e=t.target.closest("li").dataset.id,n=o.findIndex(h=>h.id===e);n!==-1&&(o.splice(n,1),u(l,o),i.fire({toast:!0,position:"top-end",icon:"success",title:"Book deleted!",showConfirmButton:!1,timer:2e3})),r.innerHTML=a(o)});f.addEventListener("input",p);m.addEventListener("change",p);function p(){const t=f.value.toLowerCase().trim(),s=m.value;let e=o;e=e.filter(n=>n.title.toLowerCase().includes(t)),s!=="All"&&(e=e.filter(n=>n.status===s)),r.innerHTML=a(e)}L.addEventListener("click",()=>{o.length!==0&&(o.length=0,u(l,o),r.innerHTML="",i.fire({toast:!0,position:"top-end",icon:"success",title:"Library cleared!",showConfirmButton:!1,timer:2e3}))});
//# sourceMappingURL=9-library_tracker.js.map
