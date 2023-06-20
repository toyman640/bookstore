import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
// import { updateCategory } from './categories/categorysSlice';

export const store = configureStore({
  reducer: {
    shelf: bookReducer,
    // section: updateCategory,
  },
});

export default store;
