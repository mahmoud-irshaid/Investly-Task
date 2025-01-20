import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../Types/Project.Type';
import projectsData from '../Data/Projects.Data';

interface TableState {
  projects: Project[];
}

const initialState: TableState = {
  projects: projectsData,
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    updateProjectStatus: (
      state,
      action: PayloadAction<{ id: number; newStatus: Project['status'] }>,
    ) => {
      const { id, newStatus } = action.payload;
      const project = state.projects.find((proj) => proj.id === id);
      if (project) {
        project.status = newStatus;
      }
    },
    deleteProject: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.projects = state.projects.filter((proj) => proj.id !== id);
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
  },
});

export const { updateProjectStatus, deleteProject, addProject } =
  tableSlice.actions;
export default tableSlice.reducer;
