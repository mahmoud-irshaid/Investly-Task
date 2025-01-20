import React, { FC, useState, useRef, useEffect, memo } from 'react';
import { BsThreeDots } from 'react-icons/bs';

interface ActionsMenuProps {
  onToggleStatus: () => void;
  onDelete: () => void;
}

const ActionsMenu: FC<ActionsMenuProps> = ({ onToggleStatus, onDelete }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative inline-flex hover:bg-white cursor-pointer p-2 rounded-full"
    >
      <BsThreeDots onClick={handleToggleMenu} />

      {isMenuOpen && (
        <div className="absolute right-0 z-10 w-48 mt-4 bg-white border border-gray-100 rounded-md shadow-lg">
          <button
            onClick={onToggleStatus}
            className="block w-full px-4 py-2 text-sm text-left text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          >
            Toggle Status
          </button>
          <button
            onClick={onDelete}
            className="block w-full px-4 py-2 text-sm text-left text-red-500 hover:bg-red-50 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(ActionsMenu);
