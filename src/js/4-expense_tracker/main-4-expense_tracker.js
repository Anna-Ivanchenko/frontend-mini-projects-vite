import { expenses } from './expenses';
import { expenseTemplate } from './template';
import { expensesTemplate } from './render';
import { loadExpenses, saveExpenses, STORAGE_KEY04 } from './storage';

const formExElem = document.querySelector('.js-expense_tracker');
const expListElem = document.querySelector('.js-expense-list');
const textTotal = document.querySelector('.js-total');
const filterInput = document.querySelector('.js-filter-amount');
const filterBtn = document.querySelector('.js-filter-btn');
const clearBtn = document.querySelector('.js-clear-all');

const savedExpenses = loadExpenses(STORAGE_KEY04, []);

if (savedExpenses.length) {
  expenses.push(...savedExpenses);

  expListElem.innerHTML = expensesTemplate(expenses);

  textTotal.textContent = totalSumExp(expenses);
}

formExElem.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formExElem);

  const expObj = {
    id: Date.now(),
    title: formData.get('title'),
    amount: Number(formData.get('amount')),
  };

  expenses.push(expObj);

  saveExpenses(STORAGE_KEY04, expenses);

  expListElem.innerHTML = expensesTemplate(expenses);
  textTotal.textContent = totalSumExp(expenses);

  localStorage.removeItem(STORAGE_KEY04);

  formExElem.reset();
});

function totalSumExp(expenses) {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

expListElem.addEventListener('click', e => {
  if (!e.target.classList.contains('js-btn-delete')) {
    return;
  }

  const li = e.target.closest('li');
  const expenseId = li.dataset.id;

  const index = expenses.findIndex(
    expense => expense.id.toString() === expenseId
  );

  if (index !== -1) {
    expenses.splice(index, 1);
  }

  saveExpenses(STORAGE_KEY04, expenses);

  expListElem.innerHTML = expensesTemplate(expenses);
  textTotal.textContent = totalSumExp(expenses);
});

filterBtn.addEventListener('click', () => {
  const maxAmount = Number(filterInput.value);

  if (!maxAmount) {
    expListElem.innerHTML = expensesTemplate(expenses);
    return;
  }

  const filteredExpensees = expenses.filter(
    expense => expense.amount <= maxAmount
  );

  expListElem.innerHTML = expensesTemplate(filteredExpensees);
});

clearBtn.addEventListener('click', () => {
  if (expenses.length === 0) {
    return;
  }

  expenses.length = 0;

  saveExpenses(STORAGE_KEY04, expenses);

  expListElem.innerHTML = '';
  textTotal.textContent = 0;
});
