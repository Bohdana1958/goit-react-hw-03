import css from './ContactList.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id} className={css.listItem}>
          <div>
            <p>
              <IoPersonSharp className={css.icon} />
              {item.name}
            </p>
            <p>
              <FaPhone className={css.icon} />
              {item.number}
            </p>
          </div>
          <button className={css.delete} onClick={() => onDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
