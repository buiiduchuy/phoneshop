import React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setFilter } from '../productSlice';

export const SelectItem = () => {
  const dispatch = useDispatch();
  return (
    <Select
      placeholder="Filter"
      onChange={(value) => {
        dispatch(setFilter(value));
      }}
      options={[
        { value: 'all', label: 'All' },
        { value: 'apple', label: 'Apple' },
        { value: 'samsung', label: 'SamSung' },
      ]}
      style={{ width: '110px' }}
    />
  );
};
