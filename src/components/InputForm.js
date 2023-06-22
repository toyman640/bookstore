// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBooks } from '../redux/books/booksSlice';
import Addbook from './Addbook';

function InputForm() {
  const dispatch = useDispatch();
  // const books = useSelector((state) => state.shelf.initialBooks);
  // const [counter, setCounter] = useState(1);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const newBook = {
      item_id: crypto.randomUUID(),
      title,
      author,
      category: 'Fiction',
    };

    dispatch(postBooks(newBook));
    form.reset();
  };
  return (
    <div className="Form-section">
      <h2 className="Form-title">ADD NEW BOOK</h2>
      <form className="Form-fields" onSubmit={handleSubmit}>
        <input className="Tilte-input" name="title" placeholder="Book title" />
        <input className="Author-input" name="author" placeholder="author" />
        <Addbook />
      </form>
    </div>
  );
}

export default InputForm;
