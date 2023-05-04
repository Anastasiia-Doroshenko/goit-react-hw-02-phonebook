import propTypes from 'prop-types';
import { StyledFilter } from './ContactFilterStyled';

export function ContactFilter({ handleChange, value }) {
  return (
    <>
      <StyledFilter>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={value}
        />
      </StyledFilter>
    </>
  );
}

ContactFilter.propTypes = {
  handleChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
