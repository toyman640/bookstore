import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Deletebook({ bookId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(bookId));
  };
  return (
    <div>
      <button type="button" onClick={handleDelete}>Delete </button>
    </div>
  );
}

Deletebook.propTypes = {
  bookId: PropTypes.number.isRequired,
};

export default Deletebook;
