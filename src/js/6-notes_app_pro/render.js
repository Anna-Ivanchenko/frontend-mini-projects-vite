import { noteTemplate } from './template';

export function notesTemplate(notes) {
  return notes.map(noteTemplate).join('');
}
