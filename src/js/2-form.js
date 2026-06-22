// * Ключ для localStorage
const STORAGE_KEY = 'feedback-form-state';

// * Отримуємо форму
const form = document.querySelector('.feedback-form');

// * Об'єкт поза функціями
let objFormData = {
  email: '',
  message: '',
};

// * Перевірка localStorage при завантаженні
const saveData = localStorage.getItem(STORAGE_KEY);
console.log(saveData);

if (saveData) {
  objFormData = JSON.parse(saveData);

  form.elements.email.value = objFormData.email || '';
  form.elements.message.value = objFormData.message || '';
}

// * Делегування події input
form.addEventListener('input', e => {
  const { name, value } = event.target;
  if (name === 'email' || name === 'message') {
    objFormData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objFormData));
  }
});

// * Submit
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!objFormData.email || !objFormData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(objFormData);

  // * очищення
  localStorage.removeItem(STORAGE_KEY);
  objFormData = { email: '', message: '' };
  form.reset();
});
