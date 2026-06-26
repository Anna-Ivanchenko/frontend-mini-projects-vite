import { v4 as uuidv4 } from 'uuid';
import { notes } from './notes';
import { notesTemplate } from './render';
import { noteTemplate } from './template';
import { STORAGE_KEY06, saveNotes, loadNotes } from './storage';

const formNote = document.querySelector('.js-note-form');
const notesList = document.querySelector('.js-notes-list');
const searchNote = document.querySelector('.js-search-note');
const btnDeleteAll = document.querySelector('.js-clear-all-notes');

const savedNotes = loadNotes(STORAGE_KEY06, []);

if (savedNotes.length) {
  notes.push(...savedNotes);

  notesList.innerHTML = notesTemplate(notes);
}

formNote.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(formNote);

  const objNote = {
    id: uuidv4(),
    text: formData.get('note'),
    completed: false,
  };

  notes.push(objNote);

  saveNotes(STORAGE_KEY06, notes);

  notesList.innerHTML = notesTemplate(notes);

  formNote.reset();
});

notesList.addEventListener('click', e => {
  if (!e.target.classList.contains('js-btn-delete')) {
    return;
  }

  const li = e.target.closest('li');
  const noteId = li.dataset.id;

  const index = notes.findIndex(note => note.id === noteId);

  if (index !== -1) {
    notes.splice(index, 1);

    saveNotes(STORAGE_KEY06, notes);
  }

  notesList.innerHTML = notesTemplate(notes);
});

notesList.addEventListener('change', e => {
  if (e.target.type !== 'checkbox') {
    return;
  }

  const li = e.target.closest('li');

  const noteId = li.dataset.id;

  const note = notes.find(note => note.id === noteId);

  if (!note) {
    return;
  }

  note.completed = !note.completed;

  saveNotes(STORAGE_KEY06, notes);

  notesList.innerHTML = notesTemplate(notes);
});

searchNote.addEventListener('input', () => {
  const textSearch = searchNote.value.toLowerCase();

  if (!textSearch) {
    notesList.innerHTML = notesTemplate(notes);
    return;
  }
  const searchedText = notes.filter(note =>
    note.text.toLowerCase().includes(textSearch)
  );
  notesList.innerHTML = notesTemplate(searchedText);
});

btnDeleteAll.addEventListener('click', () => {
  notes.length = 0;

  saveNotes(STORAGE_KEY06, notes);

  notesList.innerHTML = '';
});
