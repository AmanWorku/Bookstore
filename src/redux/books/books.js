import { createReducer } from '@reduxjs/toolkit';

const ADD = 'bookstore/books/ADD';
const DELETE = 'bookstore/books/DELETE';

const bookReducer = createReducer([], {
  [ADD]: (state, action) => ([...state, action.book]),
},
{ [DELETE]: (state, action) => state.filter((book) => book.id !== action.book.id) });

export const addBook = (book) => (
  { type: ADD, book }
);

export const deleteBook = (book) => (
  { type: DELETE, book }
);

export default bookReducer;
