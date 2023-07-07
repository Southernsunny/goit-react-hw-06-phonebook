import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { Container, Total, List, Item, Name, Number, BtnDelete } from './ContactsList.styled';

const ContactsList = ({ contacts }) => {
  const totalContacts = contacts.length;
  const dispatch = useDispatch();

  return (
    <Container>
      <Total>
        all:
        {totalContacts}
      </Total>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <BtnDelete onClick={() => dispatch(deleteContact(id))}>
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
};

export default ContactsList;
