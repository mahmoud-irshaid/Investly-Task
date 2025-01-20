import React, { FC } from 'react';
import { IoMdSearch } from 'react-icons/io';

const SearchInput: FC<{
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder = 'Type to search...', value, onChange }) => {
  return (
    <div className="w-full md:w-auto block border rounded-full border-gray-200 px-4 py-2">
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent pr-9 text-sm text-main placeholder-gray-300 focus:outline-none xl:w-60"
        />
        <button
          type="button"
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          <IoMdSearch size={16} className="text-subtle" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
