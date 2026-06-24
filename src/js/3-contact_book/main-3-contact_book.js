import { contacts } from './contacts';
import { contactTemplate } from './template';
import { contactsTemplate } from './render';
import { STORAGE_KEY } from './storage';
import { saveContacts } from './storage';
import { loadContacts } from './storage';

const formElem = document.querySelector('.js-contact-form');
const contListElem = document.querySelector('.js-contact-list');

formElem.addEventListener('input', () => {
  const formData = new FormData(formElem);

  const obj = {
    id: Date.now(),
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
  };

  saveContacts(STORAGE_KEY, obj);
});

document.addEventListener('DOMContentLoaded', e => {
  const contactForm = loadContacts(STORAGE_KEY, {});
  formElem.elements.name.value = contactForm.name || '';
  formElem.elements.phone.value = contactForm.phone || '';
  formElem.elements.email.value = contactForm.email || '';
});

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formElem);

  const obj = {
    id: Date.now(),
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
  };

  contacts.push(obj);

  const markup = contactTemplate(obj);

  contListElem.insertAdjacentHTML('beforeend', markup);

  localStorage.removeItem(STORAGE_KEY);
  formElem.reset();
});

contListElem.addEventListener('click', e => {
  if (!e.target.classList.contains('js-btn-delete')) {
    return;
  }

  const li = e.target.closest('li');
  const contactId = li.dataset.id;

  const index = contacts.findIndex(
    contact => contact.id.toString() === contactId
  );

  if (index !== -1) {
    contacts.splice(index, 1);
  }

  li.remove();

  console.log(contacts);
});
