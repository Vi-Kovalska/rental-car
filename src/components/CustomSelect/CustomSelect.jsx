import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import s from './CustomSelect.module.css'; 

const DropdownIndicator = (props) => {
  const {
    selectProps: { menuIsOpen },
  } = props;

  return (
    <div className={`${s.arrowWrapper} ${menuIsOpen ? s.up : ''}`}>
      <svg width='16' height='16' className={s.arrow}><use href='/icons.svg#arrow-down'/></svg>
    </div>
  );
};

const CustomSelect = ({ name, options, placeholder }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  const selectedOption = options.find(opt => opt.value === field.value) || null;

  return (
    <div className={s.wrapper}>
      <Select
        options={options}
        placeholder={placeholder}
        value={selectedOption}
        onChange={(option) => setValue(option?.value || '')}
        components={{ DropdownIndicator }}
        isClearable
        classNamePrefix="custom"
        styles={{
          control: (base, state) => ({
            ...base,
            border: 'none',
            borderRadius: '12px',
            borderColor: state.isFocused ? '#3470FF' : '#D9D9D9',
            minHeight: '44px',
            boxShadow: 'none',
            '&:hover': {
              borderColor: '#3470FF',
            },
          }),
          menu: (base) => ({
            ...base,
            borderRadius: '12px',
            zIndex: 10,
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
              ? '#3470FF'
              : isFocused
              ? '#E9F0FF'
              : '#fff',
            color: isSelected ? '#fff' : '#121417',
            cursor: 'pointer',
            padding: '10px 12px',
          }),
        }}
      />
      {meta.touched && meta.error && (
        <div className={s.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default CustomSelect;
