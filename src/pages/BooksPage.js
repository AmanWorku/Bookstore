import React from 'react';
import AddBook from '../components/AddBook';
import DisplayBooks from '../components/DisplayBooks';

function BooksPage() {
  return (
    <div className="book-page">
      <DisplayBooks />
      <div className="hr" />
      <AddBook />
    </div>
  );
}

export default BooksPage;
