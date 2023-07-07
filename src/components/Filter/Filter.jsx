import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selector';
import { Input, Label } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilterHandler = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name →
      <Input
        type="text"
        value={filter}
        onChange={changeFilterHandler}
        placeholder="Search..."
      ></Input>
    </Label>
  );
};

export default Filter;
