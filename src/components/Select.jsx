import React from 'react';

function Select({ id, name, options, label, onChange }) {
  console.log(options);
  if (options.length > 0) {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm lg:text-xs" htmlFor={id}>
            {label}
          </label>
        )}
        <select
          id={id}
          name={name}
          className="border border-gray-300 lg:w-1/2"
          onChange={onChange}
        >
          {options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  return <p>Loading...</p>;
}

export default Select;
