import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  chargers: [
    {
      id: 1,
      option: "",
    },
    {
      id: 2,
      option: "",
    },
  ],
};
export const chargeOptionSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setOption: (
      state,
      action: PayloadAction<{ id: number; option: string }>
    ) => {
      state.chargers[action.payload.id - 1].option = action.payload.option;
    },
  },
});

export const { setOption } = chargeOptionSlice.actions;

export default chargeOptionSlice.reducer;
