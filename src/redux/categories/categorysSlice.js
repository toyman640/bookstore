import { createSlice } from '@reduxjs/toolkit';

const initialCat = {
  initialCategories: [],
};

export const updateCategory = createSlice({
  name: 'library',
  initialCat,
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export const { checkStatus } = updateCategory.actions;
export default updateCategory.reducer;
