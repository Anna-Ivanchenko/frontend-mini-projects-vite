export function bookTemplate(book) {
  return `<li data-id="${book.id}">
  <h3>${book.title}</h3>

  <p>
    ${book.author}
  </p>

  <p>
    ${book.status}
  </p>

  <button
    class="js-btn-delete"
    type="button"
  >
    Delete
  </button>
</li>`;
}
