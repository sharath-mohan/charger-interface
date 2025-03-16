import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activeCharger: 1,
};
export const chargerSlice = createSlice({
  name: "charger",
  initialState,
  reducers: {
    setActiveCharger: (state, action: PayloadAction<number>) => {
      state.activeCharger = action.payload;
    },
  },
});
export const { setActiveCharger } = chargerSlice.actions;

export default chargerSlice.reducer;
