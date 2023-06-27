import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name →
      <Input type="text" value={value} onChange={onChange} placeholder="Search..."></Input>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
