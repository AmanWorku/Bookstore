import React from 'react';
import { useSelector } from 'react-redux';

const Book = () => {
  const books = useSelector((state) => state.books);
  return (

    <div className="book list">
      <h1>
        <span className="title">Book Title</span>
        <span className="author">Book Author</span>
      </h1>
      {
        books.map((book) => (
          <>
            <h3>{book.author}</h3>
            <h3>{book.title}</h3>
          </>
        ))
      }
      <button type="submit" className="remove-btn">Remove</button>
    </div>
  );
};
export default Book;
