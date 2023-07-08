import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { Container, Total, List, Item, Name, Number, BtnDelete } from './ContactsList.styled';
import { getVisibleContacts } from 'redux/selector';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const totalContacts = contacts.length;
  const dispatch = useDispatch();

  return (
    <Container>
      <Total> all:{totalContacts} </Total>
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

export default ContactsList;
