import css from './ContactList.module.css';

import { Contact } from '../Contact/Contact';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <Contact key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};
