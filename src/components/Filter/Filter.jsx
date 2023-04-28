import React from 'react';
import { Label, FilterField } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = e => dispatch(setStatusFilter(e.currentTarget.value));

  return (
    <Label>
      Find contacts by name
      <FilterField
        value={value}
        onChange={onFilterChange}
        type="text"
        name="filter"
      />
    </Label>
  );
};
