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
      {books.map((book) => (
        <div className="Book-item" key={book.id}>
          <div className="First-part">
            <p className="Category">
              {book.category}
            </p>
            <p className="Title">
              {book.title}
            </p>
            <p className="Author">
              {book.author}
            </p>
            <ul className="Actions">
              <li>Comments </li>
              |
              <li><Deletebook bookId={book.id} /></li>
              |
              <li>Edit </li>
            </ul>
          </div>
          <div className="Second-part">
            <div className="Oval" />
            <h2 className="Rate">
              100%
              <br />
              <span className="Status">Completed</span>
            </h2>
          </div>
          <div className="Third-part">
            <p className="Current">CURRENT CHAPTER</p>
            <p className="Chap">Chapter 17</p>
            <button className="Chap-btn" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
      <InputForm />
    </div>
  );
}

export default Books;
