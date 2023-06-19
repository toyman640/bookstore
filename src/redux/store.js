import { configureStore } from '@reduxjs/toolkit';
import { updateBooks } from './books/booksSlice';
import { updateCategory } from './categories/categorysSlice';

export const store = configureStore({
  reducer: {
    shelf: updateBooks,
    section: updateCategory,
  },
});

export default store;
