import { useEffect, useState } from 'react';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const [nameFilter, setnameFilter] = useState('');
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers
      ? JSON.parse(storedUsers)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = newUser => {
    setUsers(prevUsers => {
      return [...prevUsers, newUser];
    });
  };

  const deleteUser = userId => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== userId);
    });
  };

  const visibleUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={nameFilter} onChange={setnameFilter} />
      <ContactList items={visibleUsers} onDelete={deleteUser} />
    </div>
  );
};
