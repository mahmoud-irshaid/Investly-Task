import React, { useState, useCallback, useEffect } from 'react';
import CardDataStats from '../../components/CardDataStats/CardDataStats';
import SearchInput from '../../components/SearchInput/SearchInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import UnitCard from '../../components/UnitCard/UnitCard';

/**
 * Dashboard component displays sales stats, and lists the units as cards.
 */
const Dashboard: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');

  // Get units from Redux store
  const units = useSelector((state: RootState) => state.units.units);

  /**
   * Handles the search input change and updates the searchValue.
   * @param {string} value - The value entered in the search input.
   */
  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  /**
   * Debounces the search input. Delays updating the debouncedSearch value
   * until the user stops typing for 500ms.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  /**
   * Filters the units based on the debounced search term.
   * If there is no search term, it returns all units.
   */
  const filteredUnits = debouncedSearch
    ? units.filter((unit) =>
        unit.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
      )
    : units;

  return (
    <div className="px-9">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats
          title="Today's sales"
          total="$3.456K"
          rate={43}
          levelUp
        />
        <CardDataStats title="New Products" total="221" rate={43} levelMedium />
        <CardDataStats title="Inventory" total="1,231" rate={3} levelDown />
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4 pt-8 pb-6">
        <h1 className="text-title-md font-semibold text-neutral">
          Your favorites
        </h1>

        <SearchInput
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Conditionally render message if no units match the search */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        {filteredUnits.length === 0 ? (
          <div className="col-span-12 m-4 text-center text-gray-500">
            No units available
          </div>
        ) : (
          filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="col-span-12 md:col-span-6 xl:col-span-4"
            >
              <UnitCard unit={unit} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
