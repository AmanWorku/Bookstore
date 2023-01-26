import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import handleAPI from '../api/handleAPI';

let state;

export const createBook = createAsyncThunk('bookstore/books/create', async (book) => {
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

export const deleteBook = createAsyncThunk('bookstore/books/delete', async (id) => {
  await handleAPI.remove(id);
  return { id };
});

export const fetchAllBooks = createAsyncThunk('bookstore/books/getAll', async () => {
  try {
    const result = await handleAPI.fetchBooks();
    return result.data;
  } catch (err) {
    return err.message;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  extraReducers(builder) {
    builder
      .addCase(createBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, (action) => {
        const itemIndex = state.find((book) => book.id === action.payload.id);
        state.splice(itemIndex, 1);
      }))
      .addCase(createBook.fulfilled, (state, action) => {
        const allId = Object.keys(action.payload);
        allId.forEach((id) => {
          const book = {
            id,
            author: action.payload[id].author,
            title: action.payload[id].title,
            category: action.payload[id].category,
          };
          state.push(book);
        });
      });
  },
});

const { reducer } = bookSlice;
export default reducer;

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
