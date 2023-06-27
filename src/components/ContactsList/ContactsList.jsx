import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { Container, Total, List, Item, Name, Number, BtnDelete } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  const totalContacts = contacts.length;
  return (
    <Container>
      <Total>all: {totalContacts}</Total>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <BtnDelete onClick={() => onDeleteContact(id)}>
              Delete
              <AiOutlineUserDelete />
            </BtnDelete>
          </Item>
        ))}
      </List>
    </Container>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
