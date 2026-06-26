import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{v as m}from"./assets/vendor-BsGwUR3l.js";const e=[];function f(t){return`<li data-id="${t.id}">
      <input type="checkbox"
      ${t.completed?"checked":""}
      />

      <span class="${t.completed?"completed":""}">${t.text}</span>

      <button
        class="js-btn-delete"
        type="button"
      >
        Delete
      </button>
    </li>`}function r(t){return t.map(f).join("")}const i="notes-app";function a(t,o){const n=JSON.stringify(o);localStorage.setItem(t,n)}function L(t,o){const n=localStorage.getItem(t);try{return JSON.parse(n)??o}catch{return n??o}}const d=document.querySelector(".js-note-form"),s=document.querySelector(".js-notes-list"),u=document.querySelector(".js-search-note"),h=document.querySelector(".js-clear-all-notes"),p=L(i,[]);p.length&&(e.push(...p),s.innerHTML=r(e));d.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(d),n={id:m(),text:o.get("note"),completed:!1};e.push(n),a(i,e),s.innerHTML=r(e),d.reset()});s.addEventListener("click",t=>{if(!t.target.classList.contains("js-btn-delete"))return;const n=t.target.closest("li").dataset.id,c=e.findIndex(l=>l.id===n);c!==-1&&(e.splice(c,1),a(i,e)),s.innerHTML=r(e)});s.addEventListener("change",t=>{if(t.target.type!=="checkbox")return;const n=t.target.closest("li").dataset.id,c=e.find(l=>l.id===n);c&&(c.completed=!c.completed,a(i,e),s.innerHTML=r(e))});u.addEventListener("input",()=>{const t=u.value.toLowerCase();if(!t){s.innerHTML=r(e);return}const o=e.filter(n=>n.text.toLowerCase().includes(t));s.innerHTML=r(o)});h.addEventListener("click",()=>{e.length=0,a(i,e),s.innerHTML=""});
//# sourceMappingURL=6-notes_app_pro.js.map
