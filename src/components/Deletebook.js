import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/booksSlice';

function Deletebook({ bookId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBooks({ id: bookId }));
  };
  return (
    <div>
      <button type="button" onClick={handleDelete}>Delete </button>
    </div>
  );
}

Deletebook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default Deletebook;
