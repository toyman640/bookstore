import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/booksSlice';
import '../App.css';

function Deletebook({ bookId }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBooks({ id: bookId }));
  };
  return (
    <div>
      <button className="Remove" type="button" onClick={handleDelete}>Remove </button>
    </div>
  );
}

Deletebook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default Deletebook;
