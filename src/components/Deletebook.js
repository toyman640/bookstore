import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Deletebook() {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(removeBook())}>Delete </button>
    </div>
  );
}

export default Deletebook;
