import throttle from 'lodash.throttle';

import { loadFeedback, saveFeedback, STORAGE_KEY07 } from './storage';

const formFB = document.querySelector('.js-feedback-form');

formFB.addEventListener('input', throttle(handleInput, 500));

function handleInput() {
  const formData = new FormData(formFB);

  const objUser = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  saveFeedback(STORAGE_KEY07, objUser);
}

//! ще один метод
// function handleInput() {
//   const formData = new FormData(formFB);

//   const objUser = Object.fromEntries(formData.entries());

//   saveFeedback(STORAGE_KEY07, objUser);
// }

document.addEventListener('DOMContentLoaded', e => {
  const feedbackForm = loadFeedback(STORAGE_KEY07, {});
  formFB.elements.name.value = feedbackForm.name || '';
  formFB.elements.email.value = feedbackForm.email || '';
  formFB.elements.message.value = feedbackForm.message || '';
});

formFB.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(formFB);

  const objUser = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  //! ще один метод
  // const objUser = Object.fromEntries(new FormData(formFB).entries());

  console.log(objUser);

  localStorage.removeItem(STORAGE_KEY07);

  //! викликаємо функцію очищеня localStorage
  // removeFeedback(STORAGE_KEY07);

  formFB.reset();
});
