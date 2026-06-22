export const STORAGE_KEY = 'contact-info';

export function saveContacts(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function loadContacts(key, defaultValue) {
  const jsonData = localStorage.getItem(key);

  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch (error) {
    return jsonData ?? defaultValue;
  }
}
