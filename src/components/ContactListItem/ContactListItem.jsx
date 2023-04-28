import React from 'react';
import PropTypes from 'prop-types';
import { Contact, ListItem, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteUser = () => dispatch(deleteContact(id));
  return (
    <ListItem>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={deleteUser}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
