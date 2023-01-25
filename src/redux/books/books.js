import { createReducer } from '@reduxjs/toolkit';

const ADD = 'bookstore/books/ADD';
const DELETE = 'bookstore/books/DELETE';
const INITIAL_STATE = 0;
const bookReducer = (state = INITIAL_STATE, action){
    switch(action.type){
        case ADD:
            return [...state, action.book]
    
    case REMOVE:
            return state.filter((book) => book.id !== action.book.id);
    }
}
export const addBook = (book) => (
  { type: ADD, book }
);

export const deleteBook = (bookId) => (
  { type: DELETE, bookId }
);

console.log(addBook({author: "abebe"}));

export default bookReducer;
