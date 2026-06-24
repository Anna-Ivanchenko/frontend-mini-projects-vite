export function expenseTemplate(expense) {
  return `<li data-id="${expense.id}">
  ${expense.title} - ${expense.amount} грн
  <button class='js-btn-delete' type='button'>Delete</button>
</li>`;
}
