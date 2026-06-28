import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { productsTemplate } from './render';
import { products } from './products';

const prodForm = document.querySelector('.js-product-form');
const cardList = document.querySelector('.js-products-list');

prodForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(prodForm);

  const predObj = {
    id: uuidv4(),
    name: formData.get('name'),
    price: formData.get('price'),
    quantity: 1,
  };

  console.log(predObj);
  products.push(predObj);
  cardList.innerHTML = productsTemplate(products);
});
