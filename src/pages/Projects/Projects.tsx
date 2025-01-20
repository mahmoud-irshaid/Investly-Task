import { useCallback, useState, useEffect } from 'react';
import Table from '../../components/ProjectsTable/Table';
import SearchInput from '../../components/SearchInput/SearchInput';
import FilterButton from '../../components/FilterButton/FilterButton';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Project } from '../../store/Types/Project.Type';
import { HiDotsVertical } from 'react-icons/hi';
import {
  MdFilterList,
  MdOutlineRotateRight,
  MdOutlineSettings,
  MdSort,
} from 'react-icons/md';

/**
 * Projects component renders the project list page
 */
const Projects = () => {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Fetches projects from the Redux store
  const projects = useSelector((state: RootState) => state.projects.projects);

  /**
   * Handles search input changes and updates the search value state.
   *
   * @param {string} value - The new search query entered by the user.
   */
  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  /**
   * Handles the click event for the filter button.
   * (Currently only logs a message to the console)
   */
  const handleFilterClick = useCallback(() => {
    console.log('Filter button clicked');
  }, []);

  /**
   * Handles the click event for the sort button.
   * (Currently only logs a message to the console)
   */
  const handleSortClick = useCallback(() => {
    console.log('Sort button clicked');
  }, []);

  // Handle debounced search to avoid excessive filtering on every keystroke
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  // Filter projects based on the debounced search value
  useEffect(() => {
    setFilteredProjects(
      debouncedSearch
        ? projects.filter((project) =>
            project.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
          )
        : projects, // If no search term, show all projects
    );
  }, [debouncedSearch, projects]);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex-col flex xl:flex-row justify-start xl:justify-between items-center gap-2 px-9">
        <div className="w-full xl:w-auto flex-col-reverse flex xl:flex-row gap-2">
          <div className="hidden xl:flex w-full xl:w-auto  flex-wrap gap-2">
            <FilterButton
              label="Filter projects"
              onClick={handleFilterClick}
              icon={<MdFilterList size={18} className="text-gray" />}
            />
            <FilterButton
              label="Sort projects"
              onClick={handleSortClick}
              icon={<MdSort size={18} className="text-gray" />}
            />
          </div>
          <div className="w-full xl:w-auto flex-1">
            <SearchInput
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="hidden xl:flex  w-full xl:w-auto gap-2">
          <FilterButton
            label="Refresh"
            onClick={() => console.log('Refresh')}
            icon={<MdOutlineRotateRight size={18} className="text-gray" />}
          />
          <FilterButton
            label="Customise"
            onClick={() => console.log('Customise')}
            icon={<MdOutlineSettings size={18} className="text-gray" />}
          />
          <HiDotsVertical
            size={44}
            className="text-main p-3 border-2 rounded-full border-gray-100"
          />
        </div>
        <div className="flex xl:hidden flex-wrap justify-center w-full xl:w-auto gap-2">
          <FilterButton
            label="Filter projects"
            onClick={handleFilterClick}
            icon={<MdFilterList size={18} className="text-gray" />}
          />
          <FilterButton
            label="Sort projects"
            onClick={handleSortClick}
            icon={<MdSort size={18} className="text-gray" />}
          />
          <FilterButton
            label="Refresh"
            onClick={() => console.log('Refresh')}
            icon={<MdOutlineRotateRight size={18} className="text-gray" />}
          />
          <FilterButton
            label="Customise"
            onClick={() => console.log('Customise')}
            icon={<MdOutlineSettings size={18} className="text-gray" />}
          />
          <HiDotsVertical
            size={44}
            className="text-main p-3 border-2 rounded-full border-gray-100"
          />
        </div>
      </div>
      <Table projects={filteredProjects} />
    </div>
  );
};

export default Projects;
