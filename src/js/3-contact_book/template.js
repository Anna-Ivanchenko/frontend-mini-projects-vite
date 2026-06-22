export function contactTemplate(contact) {
  return `<li data-id="${contact.id}">
  <h3>${contact.name}</h3>
  <p>${contact.phone}</p>
  <p>${contact.email}</p>
  <button class='js-btn-delete' type='button'>Delete</button>
</li>`;
}
