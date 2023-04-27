import PropTypes from 'prop-types';
import { StyledContacts, StyledButton } from './ContactTemplateStyled';

export const ContactTemplate = ({ name, number, id, onDelete }) => (
  <StyledContacts>
    <span>{name}:</span>
    <span>{number}</span>
    <StyledButton
      onClick={() => {
        onDelete(id);
      }}
    >
      Delete
    </StyledButton>
  </StyledContacts>
);

ContactTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
