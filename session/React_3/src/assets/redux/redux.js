import { configureStore, createSlice } from "@reduxjs/toolkit";

const partSlice = createSlice({
  name: "part",
  initialState: {
    selectedPart: "",
  },
  reducers: {
    setSelectedPart: (state, action) => {
      state.selectedPart = action.payload;
    },
  },
});

export const { setSelectedPart } = partSlice.actions;

const store = configureStore({
  reducer: {
    part: partSlice.reducer,
  },
});

export default store;
