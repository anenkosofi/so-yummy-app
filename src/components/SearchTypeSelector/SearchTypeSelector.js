import Select from 'react-select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateSearchType } from 'redux/search/searchSlice';

import { SearchForm, Text } from './SearchTypeSelector.styled';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredient' },
];

const portal = document.body;

export const SearchTypeSelector = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    dispatch(updateSearchType(selectedOption.value));
  };

  return (
    <SearchForm>
      <Text>Search by:</Text>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Select options"
        menuPosition="absolute"
        menuPortalTarget={portal}
        styles={{
          dropdownIndicator: (base, state) => ({
            ...base,

            color: state.isFocused ? '#8BAA36' : '#BDBDBD',
            '&:hover': {
              color: '#8BAA36',
            },
          }),
          control: (provided, state) => ({
            ...provided,
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#f2ecec',
            opacity: '0.5',
            borderStyle: 'none',
            outline: 'none',
            borderColor: 'none',
            boxShadow: 'none',
            width: '146px',
            height: '34px',
            '&:hover': {
              backgroundColor: '#ffffff',
              borderStyle: 'none',
              borderColor: 'none',
              border: 'none',
              outline: 'none',
              boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
            },
            '@media (min-width: 768px)': {
              width: '175px',
              height: '41px',
            },
            '@media (min-width: 1440px)': {
              width: '198px',
              height: '49px',
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
              width: '175px',

              font: '14px',
              lineHeight: '21px',
            },
            '@media (min-width: 1440px)': {
              width: '198px',
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
    </SearchForm>
  );
};
