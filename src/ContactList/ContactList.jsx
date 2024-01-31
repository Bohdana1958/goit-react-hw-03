// import css from './ContactList.module.css';

import { Contact } from '../Contact/Contact';

export const ContactList = ({ items, onDelete }) => {
  return <Contact items={items} onDelete={onDelete} />;
};
