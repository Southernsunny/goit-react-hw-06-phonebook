import React from 'react';
import Form from '../Form';
import ContactsList from '../ContactsList';
import Filter from 'components/Filter';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};

export default App;
