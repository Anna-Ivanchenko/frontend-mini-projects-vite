export function productTemplate(product) {
  return `<li data-id="${product.id}">
  <h3>${product.name}</h3>

  <p>Price: ${product.price} грн</p>

  <div class="quantity-controls">
    <button class="js-decrease" type="button">−</button>

    <span>${product.quantity}</span>

    <button class="js-increase" type="button">+</button>
  </div>

  <button class="js-delete-product" type="button">
    Delete
  </button>
</li>`;
}
