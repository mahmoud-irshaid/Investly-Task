import React from 'react';
import { Unit } from '../../store/Types/Unit.Type';
import { MdOutlineViewCarousel } from 'react-icons/md';
import { IoMdBusiness } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';

const UnitCard: React.FC<{ unit: Unit }> = ({ unit }) => {
  return (
    <div className="border rounded-xl border-gray-200 p-6">
      <img
        src={unit.imageUrl}
        alt={unit.title}
        className="w-full h-39 object-cover rounded-md"
      />
      <h2 className="text-lg text-main font-semibold mt-6">{unit.title}</h2>
      <p className="text-subtle text-xs font-thin mt-2">{unit.description}</p>
      <div className="flex items-center gap-4 my-6">
        <div className="flex items-center gap-2">
          <IoLocationOutline size={16} className="text-subtle" />
          <span className="text-subtle text-sm">{unit.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineViewCarousel size={18} className="text-subtle" />
          <span className="text-subtle text-sm">{unit.bedrooms} Bedroom</span>
        </div>
        <div className="flex items-center gap-2">
          <IoMdBusiness size={16} className="text-subtle" />
          <span className="text-subtle text-sm">{unit.type}</span>
        </div>
      </div>
      <button className="w-full p-3 border rounded-full text-gray-600 font-semibold text-sm border-gray-200 hover:bg-gray-300">
        View listing details
      </button>
    </div>
  );
};

export default UnitCard;
