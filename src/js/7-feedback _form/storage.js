export const STORAGE_KEY07 = 'feedback-form-state';

export function saveFeedback(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function loadFeedback(key, defaultValue) {
  const jsonData = localStorage.getItem(key);

  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch (error) {
    return jsonData ?? defaultValue;
  }
}

//! видалення через функцію
// export function removeFeedback(key) {
//   localStorage.removeItem(key);
// }
