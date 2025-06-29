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
          valueContainer: (base) => ({
            ...base,
            paddingLeft: '19px',
            paddingRight: '19px',
          }),
          placeholder: (base) => ({
            ...base,
            margin: '0', 
            color: 'var(--main-color-black)',
            fontWeight: '500',
fontSize: '16px',
lineHeight: '1.25',
          }),
         
          indicatorsContainer: (base) => ({
            ...base,
            marginRight: '19px',
          }),
          control: (base, state) => ({
            ...base,
            border: 'none',
            borderRadius: '12px',
            borderColor: state.isFocused ? '#3470FF' : '#D9D9D9',
            minHeight: '44px',
            boxShadow: 'none',
            '&:hover': {
              borderColor: 'none',
            },
            backgroundColor: 'var(--main-color-gray-white)',
            width: '204px',
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
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '1.25',
            color: `${isFocused ? 'var(--main-color-black)' : 'var(--main-color-minor-grey)'}`,
            cursor: 'pointer',
            padding: '10px 12px',
          }),
          singleValue: (base) => ({
            ...base,
            color: 'var(--main-color-black)',
            fontWeight: '500',
fontSize: '16px',
lineHeight: '1.25',
          }),
          menuList: (base) => ({
            ...base,
            position: 'absolute',
            top: '0',
            border: '1px solid var(--main-color-gray-white)',
borderRadius: '12px',
width: '204px',
      height: '272px',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
            backgroundColor: 'var(--main-color-gray-white)',
           
          })
        }}
      />
      {meta.touched && meta.error && (
        <div className={s.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default CustomSelect;
