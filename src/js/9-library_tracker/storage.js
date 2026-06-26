export const STORAGE_KEY09 = 'library-tracker';

export function saveBooks(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function loadBooks(key, defaultValue) {
  const jsonData = localStorage.getItem(key);

  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch (error) {
    return jsonData ?? defaultValue;
  }
}
