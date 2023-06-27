import { useState } from 'react';
import shortid from 'shortid';
import Form from '../Form';
import ContactsList from '../ContactsList';
import Filter from 'components/Filter';
import useLocalStorage from 'components/Hooks/useLocalStorage';
import baseContacts from '../contacts.json';
import { Container } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', baseContacts);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert(`${name} is already in contacts 🍀`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
};

export default App;
