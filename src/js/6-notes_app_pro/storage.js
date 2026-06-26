export const STORAGE_KEY06 = 'notes-app';

export function saveNotes(key, value) {
  const json = JSON.stringify(value);

  localStorage.setItem(key, json);
}

export function loadNotes(key, defaultValue) {
  const jsonData = localStorage.getItem(key);

  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch (error) {
    return jsonData ?? defaultValue;
  }
}
