import { configureStore } from '@reduxjs/toolkit';
import unitsReducer from './Reducers/Units';
import projectsReducer from './Reducers/Projects';

export const store = configureStore({
  reducer: {
    units: unitsReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
