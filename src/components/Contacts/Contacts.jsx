import PropTypes from 'prop-types';
import { ContactTemplate } from '../ContactTemplate/ContactTemplate';
import { StyledContacts } from './ContactsStyled';

export const Contacts = ({ contacts, onDelete }) => (
  <StyledContacts>
    {contacts.map(({ id, name, number }) => (
      <ContactTemplate
        key={id}
        name={name}
        number={number}
        onDelete={onDelete}
        id={id}
      />
    ))}
  </StyledContacts>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};
