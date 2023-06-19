import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialBooks: [],
};

export const updateBooks = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.initialBooks.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.initialBooks = state.initialBooks.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = updateBooks.actions;
export default updateBooks.reducer;
