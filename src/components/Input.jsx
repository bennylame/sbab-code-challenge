import React from 'react';

const Input = React.forwardRef(
  ({ id, name, placeholder, label, onChange }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm lg:text-xs" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          className="border border-gray-300 lg:w-1/2 px-1"
          onChange={onChange}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
