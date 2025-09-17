import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  activeCategoryId: number | null;
}

const initialState: CategoryState = {
  activeCategoryId: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<number | null>) => {
      state.activeCategoryId = action.payload;
    },
  },
});

export const { setActiveCategory } = categorySlice.actions;

export default categorySlice.reducer;
