import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { productsTemplate } from './render';
import { products } from './products';
import { loadCards, saveCards, STORAGE_KEY08 } from './storage';

const prodForm = document.querySelector('.js-product-form');
const cardList = document.querySelector('.js-products-list');
const totalAmount = document.querySelector('.js-total-price');
const clearCard = document.querySelector('.js-clear-cart');

const savedCard = loadCards(STORAGE_KEY08, []);

if (savedCard.length) {
  products.push(...savedCard);

  renderProducts();
}
//!---------------------------------------------
prodForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(prodForm);

  const predObj = {
    id: uuidv4(),
    name: formData.get('name'),
    price: Number(formData.get('price')),
    quantity: 1,
  };

  if (!predObj.name || !predObj.price) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill all fields!',
      showConfirmButton: false,
      timer: 2000,
    });
    return;
  }

  products.push(predObj);

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Product added!',
    showConfirmButton: false,
    timer: 2000,
  });

  renderProducts();

  prodForm.reset();
});

//!-----------------------------------------

cardList.addEventListener('click', e => {
  const product = getProduct(e);

  if (!product) {
    return;
  }

  if (e.target.classList.contains('js-increase')) {
    product.quantity++;
  }

  if (e.target.classList.contains('js-decrease')) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  if (e.target.classList.contains('js-delete-product')) {
    const index = products.findIndex(item => item.id === product.id);

    if (index !== -1) {
      products.splice(index, 1);

      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Product deleted!',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  renderProducts();

  //*______другий варіант__________
  // if (e.target.classList.contains('js-increase')) {
  //   product.quantity++;
  // } else if (e.target.classList.contains('js-decrease')) {
  //   if (product.quantity > 1) {
  //     product.quantity--;
  //   }
  // } else if (e.target.classList.contains('js-delete-product')) {
  //   const index = products.findIndex(item => item.id === product.id);

  //   if (index !== -1) {
  //     products.splice(index, 1);
  //   }
  // }

  // renderProducts();
  //*_____________________________________
});

//!----------------------------------------
clearCard.addEventListener('click', () => {
  if (!products.length) {
    return;
  }

  products.length = 0;

  renderProducts();

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Cart cleared!',
    showConfirmButton: false,
    timer: 2000,
  });
});

//!----------------------------------------
function renderProducts() {
  saveCards(STORAGE_KEY08, products);
  cardList.innerHTML = productsTemplate(products);
  totalAmount.textContent = totalSumProd(products);
}

function totalSumProd(products) {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

function getProduct(e) {
  const li = e.target.closest('li');

  if (!li) {
    return null;
  }

  const productId = li.dataset.id;
  return products.find(product => product.id === productId);
}
