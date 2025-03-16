import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  chargers: [
    {
      id: 1,
      activeStage: 1,
    },
    {
      id: 2,
      activeStage: 1,
    },
  ],
};
export const chargerStageSlice = createSlice({
  name: "chargerStage",
  initialState,
  reducers: {
    setStage: (state, action: PayloadAction<{ id: number; stage: number }>) => {
      state.chargers[action.payload.id - 1].activeStage = action.payload.stage;
    },
  },
});

export const { setStage } = chargerStageSlice.actions;

export default chargerStageSlice.reducer;
