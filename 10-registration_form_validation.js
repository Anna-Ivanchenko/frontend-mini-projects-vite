import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as a}from"./assets/vendor-BsGwUR3l.js";const o=document.querySelector(".js-register-form"),n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;o.addEventListener("submit",e=>{e.preventDefault();const r=new FormData(o),t={name:r.get("name"),email:r.get("email"),password:r.get("password"),confirmPassword:r.get("confirmPassword")};//!_______Перевірка на порожні поля__________
if(!t.name||!t.email||!t.password||!t.confirmPassword){s("Please fill all fields!");return}//!_______Email validation__________
if(!n.test(t.email)){s("Invalid email!");return}//!_______Password validation__________
if(t.password.length<6){s("Password must be at least 6 characters.");return}//!_______Хоча б одна велика літера__________
if(!/[A-Z]/.test(t.password)){s("Password must contain at least one uppercase letter.");return}//!_______Хоча б одна маленька літера__________
if(!/[a-z]/.test(t.password)){s("Password must contain at least one lowercase letter.");return}//!_______Хоча б одна цифра__________
if(!/\d/.test(t.password)){s("Password must contain at least one number.");return}//!_______Перевірка збігу паролів__________
if(t.password!==t.confirmPassword){s("Passwords do not match!");return}i("Registration successful!"),o.reset()});function s(e){a.fire({toast:!0,position:"top-end",icon:"error",title:e,showConfirmButton:!1,timer:2500})}function i(e){a.fire({toast:!0,position:"top-end",icon:"success",title:e,showConfirmButton:!1,timer:2500})}
//# sourceMappingURL=10-registration_form_validation.js.map
