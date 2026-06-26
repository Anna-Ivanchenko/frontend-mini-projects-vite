export function noteTemplate(note) {
  return `<li data-id="${note.id}">
      <input type="checkbox"
      ${note.completed ? 'checked' : ''}
      />

      <span class="${note.completed ? 'completed' : ''}">${note.text}</span>

      <button
        class="js-btn-delete"
        type="button"
      >
        Delete
      </button>
    </li>`;
}
