import Swal from 'sweetalert2';

const registerForm = document.querySelector('.js-register-form');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

registerForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(registerForm);

  const user = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  //!_______Перевірка на порожні поля__________
  if (!user.name || !user.email || !user.password || !user.confirmPassword) {
    showError('Please fill all fields!');
    return;
  }

  //!_______Email validation__________

  if (!emailPattern.test(user.email)) {
    showError('Invalid email!');
    return;
  }

  //!_______Password validation__________

  if (user.password.length < 6) {
    showError('Password must be at least 6 characters.');
    return;
  }
  //!_______Хоча б одна велика літера__________
  if (!/[A-Z]/.test(user.password)) {
    showError('Password must contain at least one uppercase letter.');
    return;
  }
  //!_______Хоча б одна маленька літера__________
  if (!/[a-z]/.test(user.password)) {
    showError('Password must contain at least one lowercase letter.');
    return;
  }

  //!_______Хоча б одна цифра__________
  if (!/\d/.test(user.password)) {
    showError('Password must contain at least one number.');
    return;
  }
  //!_______Перевірка збігу паролів__________
  if (user.password !== user.confirmPassword) {
    showError('Passwords do not match!');
    return;
  }

  showSuccess('Registration successful!');

  registerForm.reset();
});

function showError(message) {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'error',
    title: message,
    showConfirmButton: false,
    timer: 2500,
  });
}

function showSuccess(message) {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 2500,
  });
}
