import React from 'react';

const Select = ({ options, targetOption, onChange }) => {
  return (
    <select className='select' value={targetOption} onChange={onChange}>
      <option value="">Seleccione una película</option>
      {options.map(option => (
        <option key={option.nombre} value={option.nombre}>
          {option.nombre} - ${option.precio}
        </option>
      ))}
    </select>
  );
};

export default Select;
