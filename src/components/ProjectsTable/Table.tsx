import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import {
  deleteProject,
  updateProjectStatus,
} from '../../store/Reducers/Projects';
import { Project, projectStatus } from '../../store/Types/Project.Type';
import ActionsMenu from '../ActionsMenu/ActionsMenu';
import Checkbox from '../Checkbox/Checkbox';
import { MdOutlineCalendarToday, MdOutlineFolderShared } from 'react-icons/md';
import { ProjectStatusEnum, ProjectTypeEnum } from '../../Enums/Enums';

/**
 * Table component displays a list of projects.
 *
 * @param {Object} props - Component props.
 * @param {Project[]} props.projects - The list of projects to be displayed.
 */
const Table: FC<{ projects: Project[] | undefined }> = ({ projects = [] }) => {
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  /**
   * Memoizes the project IDs for efficiency.
   * This is used for selecting/unselecting all projects.
   */
  const projectIds = useMemo(
    () => projects.map((project) => project.id),
    [projects],
  );

  /**
   * Handles the status change of a project.
   *
   * @param {number} id - The ID of the project to update.
   * @param {projectStatus} newStatus - The new status to set for the project.
   */
  const handleStatusChange = useCallback(
    (id: number, newStatus: projectStatus) => {
      dispatch(updateProjectStatus({ id, newStatus }));
    },
    [dispatch],
  );

  /**
   * Handles the deletion of a project.
   *
   * @param {number} id - The ID of the project to delete.
   */
  const handleDelete = useCallback(
    (id: number) => {
      dispatch(deleteProject(id));
    },
    [dispatch],
  );

  /**
   * Handles the checkbox click in the header to select/unselect all projects.
   */
  const handleHeaderCheckbox = useCallback(() => {
    if (selectAll) {
      setSelectedProjects([]);
    } else {
      setSelectedProjects(projectIds);
    }
    setSelectAll(!selectAll);
  }, [selectAll, projectIds]);

  /**
   * Handles the checkbox click for a specific row to select/unselect a project.
   *
   * @param {number} id - The ID of the project to select or unselect.
   */
  const handleRowCheckbox = useCallback((id: number) => {
    setSelectedProjects((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((projectId) => projectId !== id)
        : [...prevSelected, id],
    );
  }, []);

  if (projects.length === 0) {
    return (
      <p className="text-center m-4 text-gray-500">No projects available</p>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-grow max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="min-w-[70px] pt-4 flex justify-center font-medium text-black">
                <Checkbox checked={selectAll} onChange={handleHeaderCheckbox} />
              </th>
              <th className="min-w-[239px] py-4 px-4 font-medium text-xs text-subtle">
                Project name
              </th>
              <th className="min-w-[163px] py-4 px-4 font-medium text-xs text-subtle">
                Project Status
              </th>
              <th className="min-w-[175px] py-4 px-4 font-medium text-xs text-subtle">
                Brand
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-xs text-subtle">
                Contributors
              </th>
              <th className="min-w-[135px] py-4 px-4 font-medium text-xs text-subtle">
                Project Type
              </th>
              <th className="min-w-[115px] py-4 px-4 font-medium text-xs text-subtle">
                Due Date
              </th>
              <th className="min-w-[103px] py-4 px-4 font-medium text-xs text-subtle">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project) => (
              <tr
                key={project.id}
                className={`border-b border-stroke hover:bg-gray-100 ${
                  selectedProjects.includes(project.id) ? 'bg-gray-200' : ''
                }`}
              >
                <td className="pt-4 flex justify-center">
                  <Checkbox
                    checked={selectedProjects.includes(project.id)}
                    onChange={() => handleRowCheckbox(project.id)}
                  />
                </td>
                <td className="py-2 px-4">
                  <div className="flex items-center gap-2">
                    <MdOutlineFolderShared size={18} className="text-gray" />
                    <span className="text-sm">{project.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs  ${
                      project.status === ProjectStatusEnum.Cancelled
                        ? 'bg-red-600 text-white'
                        : project.status === ProjectStatusEnum.InReview
                          ? 'bg-yellow-400 text-white'
                          : project.status === ProjectStatusEnum.InProgress
                            ? 'bg-blue-800 text-white'
                            : 'bg-green-500 text-white'
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  {/* Brand Avatar */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={project.brand.logo}
                        alt={project.brand.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm">{project.brand.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <div className="flex -space-x-3">
                    {project.contributors.map((contributor, index) => (
                      <div key={index} className="flex items-center gap-1">
                        {contributor.avatar ? (
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                            <img
                              src={contributor.avatar}
                              alt={contributor.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-sm font-semibold">
                              {contributor.name[0]}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      project.type === ProjectTypeEnum.Reconstruction
                        ? 'bg-red-100 text-red-800'
                        : project.type === ProjectTypeEnum.Commercial
                          ? 'bg-yellow-100 text-yellow-700'
                          : project.type === ProjectTypeEnum.Residential
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {project.type}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <div className="flex items-center gap-2">
                    <MdOutlineCalendarToday size={18} className="text-gray" />
                    <span className="text-sm">{project.dueDate}</span>
                  </div>
                </td>
                <td className="py-2 px-4 relative">
                  <ActionsMenu
                    onToggleStatus={() =>
                      handleStatusChange(
                        project.id,
                        project.status === ProjectStatusEnum.InProgress
                          ? ProjectStatusEnum.Approved
                          : ProjectStatusEnum.InProgress,
                      )
                    }
                    onDelete={() => handleDelete(project.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(Table);
