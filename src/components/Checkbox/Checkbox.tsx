import React, { FC, memo, useEffect, useState } from 'react';
import { CheckboxProps } from './Checkbox.Type';
import { FaCheck } from 'react-icons/fa';

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  className = '',
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked); // Update internal state
    if (onChange) {
      onChange(newChecked); // Trigger parent callback
    }
  };

  // Synchronize isChecked with the checked prop
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <label className="flex items-center cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
        />
        <div
          className={`box flex h-4 w-4 items-center justify-center rounded border border-gray-300 transition-colors duration-200 ${
            isChecked ? 'bg-gray-800 text-white' : 'bg-white'
          } ${className}`}
        >
          {isChecked && <FaCheck size={10} />}
        </div>
      </div>
      {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
    </label>
  );
};

export default memo(Checkbox);
