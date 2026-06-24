import { expenseTemplate } from './template';

export function expensesTemplate(expenses) {
  return expenses.map(expenseTemplate).join('');
}
