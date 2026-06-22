import { contactTemplate } from './template';

export function contactsTemplate(contacts) {
  return contacts.map(contactTemplate).join('');
}
