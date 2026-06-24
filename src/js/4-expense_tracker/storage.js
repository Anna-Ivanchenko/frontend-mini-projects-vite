export const STORAGE_KEY04 = 'expense-info';

export function saveExpenses(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function loadExpenses(key, defaultValue) {
  const jsonData = localStorage.getItem(key);

  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch (error) {
    return jsonData ?? defaultValue;
  }
}
