import React, { FC } from 'react';
import { FilterButtonProps } from './FilterButton.Type';

const FilterButton: FC<FilterButtonProps> = ({ label, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-100 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
    >
      <span className="font-medium">{label}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default FilterButton;
