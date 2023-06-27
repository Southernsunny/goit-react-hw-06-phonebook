import useLocalStorage from 'components/Hooks/useLocalStorage';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FormContact, Label, Input, BtnAdd } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    // ============================================
    // const { name, value } = target;
    // if (name === 'name') {
    //   setName(value);
    // } else if (name === 'number') {
    //   setNumber(value);
    // }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContact onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          placeholder="Name..."
          id={nameInputId}
        />
      </Label>
      <Label htmlFor={numberInputId}>
        Number:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          placeholder="+380..."
          id={numberInputId}
        />
      </Label>
      <BtnAdd type="submit">
        Add contact
        <AiOutlineUserAdd />
      </BtnAdd>
    </FormContact>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
