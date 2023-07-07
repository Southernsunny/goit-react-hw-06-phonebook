import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter, getVisibleContacts } from 'redux/selector';
import Form from '../Form';
import ContactsList from '../ContactsList';
import Filter from 'components/Filter';
import { Container } from './App.styled';

const App = () => {
  const contacts = useSelector(getVisibleContacts);
  const filter = useSelector(getFilter);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter value={filter} />
      <ContactsList contacts={contacts} />
    </Container>
  );
};

export default App;
