import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Unit } from '../Types/Unit.Type';
import { unitsData } from '../Data/Unit.Data';

interface UnitsState {
  units: Unit[];
}

const initialState: UnitsState = {
  units: unitsData,
};

const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    setUnits: (state, action: PayloadAction<Unit[]>) => {
      state.units = action.payload;
    },
  },
});

export const { setUnits } = unitsSlice.actions;
export default unitsSlice.reducer;
