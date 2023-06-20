import { useSelector } from 'react-redux';
import InputForm from './InputForm';
import Deletebook from './Deletebook';
import '../App.css';

function Books() {
  const books = useSelector((state) => state.shelf.initialBooks);
  return (
    <div className="BookPage">
      <h1>
        Library
      </h1>
      {books.map((book) => (
        <div key={book.item_id}>
          <h2>{book.book}</h2>
          <p>
            Author:
            {book.author}
          </p>
          <p>
            Category:
            {book.category}
          </p>
          <Deletebook />
        </div>
      ))}
      <InputForm />
    </div>
  );
}

export default Books;
