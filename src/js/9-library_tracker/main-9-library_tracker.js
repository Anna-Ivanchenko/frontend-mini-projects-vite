import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { booksTemplate } from './render';

import { books } from './books';
import { loadBooks, saveBooks, STORAGE_KEY09 } from './storage';

const formBooks = document.querySelector('.js-book-form');
const booksList = document.querySelector('.js-book-list');
const searchBooks = document.querySelector('.js-search-book');
const filterStatus = document.querySelector('.js-filter-status');

const savedBooks = loadBooks(STORAGE_KEY09, []);

if (savedBooks.length) {
  books.push(...savedBooks);

  booksList.innerHTML = booksTemplate(books);
}

formBooks.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formBooks);

  const objBook = {
    id: uuidv4(),
    title: formData.get('title'),
    author: formData.get('author'),
    status: formData.get('status'),
  };

  console.log(objBook);

  if (!objBook.title || !objBook.author) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill all fields!',
      showConfirmButton: false,
      timer: 2000,
    });
    return;
  }

  books.push(objBook);

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Book added!',
    showConfirmButton: false,
    timer: 2000,
  });

  booksList.innerHTML = booksTemplate(books);

  saveBooks(STORAGE_KEY09, books);

  formBooks.reset();
});

booksList.addEventListener('click', e => {
  if (!e.target.classList.contains('js-btn-delete')) {
    return;
  }
  console.log(e.target);

  const li = e.target.closest('li');

  const bookId = li.dataset.id;

  const index = books.findIndex(book => book.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);

    saveBooks(STORAGE_KEY09, books);

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Book deleted!',
      showConfirmButton: false,
      timer: 2000,
    });
  }
  booksList.innerHTML = booksTemplate(books);
});

searchBooks.addEventListener('input', renderFilteredBooks);

filterStatus.addEventListener('change', renderFilteredBooks);

function renderFilteredBooks() {
  const searchText = searchBooks.value.toLowerCase().trim();
  const status = filterStatus.value;

  let filteredBooks = books;

  filteredBooks = filteredBooks.filter(book =>
    book.title.toLowerCase().includes(searchText)
  );

  if (status !== 'All') {
    filteredBooks = filteredBooks.filter(book => book.status === status);
  }
  booksList.innerHTML = booksTemplate(filteredBooks);
}
