import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
// import { updateCategory } from './categories/categorysSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    // section: updateCategory,
  },
});

export default store;
