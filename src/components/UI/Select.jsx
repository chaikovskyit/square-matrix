import React from "react";

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.field} value={option.field}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
