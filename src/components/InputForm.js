import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import Addbook from './Addbook';

function InputForm() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.shelf.initialBooks);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const newBook = {
      item_id: books.length + 1, // Assuming you have a function to generate unique IDs
      title,
      author,
      category: 'Fiction', // Assuming a default category for new books
    };

    dispatch(addBook(newBook));
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Book title" />
        <input name="author" placeholder="author" />
        <Addbook />
      </form>
    </>
  );
}

export default InputForm;
