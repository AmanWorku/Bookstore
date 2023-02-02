import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book({
  author, title, category, bookId,
}) {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(removeBook(bookId));
  return (
    <>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="b-category">{ category }</h4>
            <h2 className="b-title">{ title }</h2>
            <h6 className="b-author">{ author }</h6>
          </div>
        </div>
        <div className="func-buttons">
          <button className="func-button" type="button">Comments</button>
          <div className="vr" />
          <button className="func-button" type="button" onClick={handleRemove}>Remove</button>
          <div className="vr" />
          <button className="func-button" type="button">Edit</button>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default Book;
