import Select from 'react-select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateSearchType } from 'redux/search/searchSlice';

import { MeasureSearchForm, CustomInput } from './Selectors.styled';

const options = [
  { value: 'tbs', label: 'tbs' },
  { value: 'tsp', label: 'tsp' },
  { value: 'kg', label: 'kg' },
  { value: 'g', label: 'g' },
];

const portal = document.body;

export const MeasureTypeSelector = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    dispatch(updateSearchType(selectedOption.value));
  };

  return (
    <MeasureSearchForm>
      <CustomInput
      autoComplete="off"
      type="number"
      name="measure"
      onChange={handleChange}/>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Select options"
        menuPosition="absolute"
        menuPortalTarget={portal}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#F5F5F5',
            
            position: 'absolute',
            borderStyle: 'none',
            outline: 'none',
            borderColor: state.isFocused ? 'none' : provided.borderColor,
            boxShadow: state.isFocused ? 'none' : provided.boxShadow,
            color: '#rgba(0, 0, 0, 0.5)',
            width: '80px',
            height: '53px',
            '&:hover': {
              backgroundColor: '#ffffff',
              borderStyle: 'none',
              borderColor: 'none',
              border: 'none',
              outline: 'none',
              boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
            },
            '@media (min-width: 768px)': {
              width: '93px',
              height: '59px',
            },
            '@media (min-width: 1440px)': {
              width: '98px',
              height: '59px',
            },
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          input: (provided, state) => ({
            ...provided,
            marginBottom: '0',
            color: '#000000',
            font: '14',
            lineHeight: '1.5',
            display: 'none',
          }),
          dropdownIndicator: (base, state) => ({
            ...base,
            color: '#8BAA36',
          }),
          menu: () => ({
            border: 'none',
          }),

          menuList: (provided, state) => ({
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '8px',

            marginBottom: '10px',
            paddingBottom: '5px',
            font: '12px',
            lineHeight: '18px',
            color: '#rgba(0, 0, 0, 0.5)',
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            border: 'none',
            outline: 'none',
            borderStyle: 'none',
            borderColor: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#ffffff',
              borderStyle: 'none',
              borderColor: 'none',
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
            },
            '&:focus': {
              backgroundColor: '#ffffff',
              borderStyle: 'none',
              borderColor: 'none',
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
            },

            width: '146px',

            '@media (min-width: 768px)': {
              width: '97px',

              font: '14px',
              lineHeight: '21px',
            },
            '@media (min-width: 1440px)': {
              width: '98px',
            },
          }),
          option: (provided, state) => ({
            border: 'none',
            paddingLeft: '14px',
            color: '#000000',
            opacity: '0.5',
            padding: '8px',
            cursor: 'pointer',

            '&:hover': {
              color: '#8baa36',
              opacity: '0.75',
              backgroundColor: '#f2ecec',
            },
            '&:focus': {
              backgroundColor: 'transparent',
            },
          }),
        }}
      />
    </MeasureSearchForm>
  );
};
