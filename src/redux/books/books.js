import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import handleAPI from '../api/handleAPI';

const createBook = createAsyncThunk('bookstore/books/create', async (book) => {
  const {
    id, author, title, category,
  } = book;

  try {
    await handleAPI.create({
      id, author, title, category,
    });
    return book;
  } catch (err) {
    return err.message;
  }
});

const deleteBook = createAsyncThunk('bookstore/books/delete', async (id) => {
  await handleAPI.remove(id);
  return {id};
});

const fetchAllBooks = createAsyncThunk('bookstore/books/getAll', async () => {
  try {
    const result = await handleAPI.fetchBooks();
    return result.data;
  }catch (err) {
    return err.message;
  }
})

// const ADD = 'bookstore/books/ADD';
// const REMOVE = 'bookstore/books/REMOVE';
// const INITIAL_STATE = [];
// const bookReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ADD:
//       return [...state, action.book];

//     case REMOVE:
//       return state.filter((book) => book.id !== action.bookId);
//     default:
//       return state;
//   }
// };
// export const addBook = (book) => (
//   { type: ADD, book }
// );

// export const removeBook = (bookId) => (
//   { type: REMOVE, bookId }
// );

// export default bookReducer;
