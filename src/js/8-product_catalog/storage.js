export const STORAGE_KEY08 = 'product-card';

export function saveCards(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function loadCards(key, defaultValue) {
  const jsonData = localStorage.getItem(key);

  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch (error) {
    return jsonData ?? defaultValue;
  }
}
