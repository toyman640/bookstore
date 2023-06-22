import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import InputForm from './InputForm';
import Deletebook from './Deletebook';
import '../App.css';
import { fetchBooks } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="BookPage">
      <h1>
        Library
      </h1>
      {books.map((book) => (
        <div key={book.id}>
          <p>
            Id:
            {book.id}
          </p>
          <p>
            Title:
            {book.title}
          </p>
          <p>
            Author:
            {book.author}
          </p>
          <p>
            Category:
            {book.category}
          </p>
          <Deletebook bookId={book.id} />
        </div>
      ))}
      <InputForm />
    </div>
  );
}

export default Books;
