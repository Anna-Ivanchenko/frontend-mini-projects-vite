import { bookTemplate } from './template';

export function booksTemplate(books) {
  return books.map(bookTemplate).join('');
}
