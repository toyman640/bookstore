import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POST_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q1v9CxEBYJHmsD86QVDT/books';
const GET_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q1v9CxEBYJHmsD86QVDT/books';
const DELETE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Q1v9CxEBYJHmsD86QVDT/books';

const initialState = {
  books: [],
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(GET_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const postBooks = createAsyncThunk('postBooks/fetchBooks', async (newBook, thunKAPI) => {
  try {
    await axios.post(POST_URL, newBook);
    const response = thunKAPI.dispatch(fetchBooks());
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

export const removeBooks = createAsyncThunk('books/removeBook', async (bookId, thunKAPI) => {
  try {
    await axios.delete(`${DELETE_URL}/${bookId.id}`);
    const response = thunKAPI.dispatch(fetchBooks());
    return response;
  } catch (err) {
    return err.message;
  }
});

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload.book);
    },
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((book) => book.id !== payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = [];
      Object.keys(action.payload).forEach((item) => {
        const book = action.payload[item][0];
        state.books.push({
          id: item, title: book.title, author: book.author, category: book.category,
        });
      });
    });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
