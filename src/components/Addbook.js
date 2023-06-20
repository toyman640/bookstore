import { useDispatch } from 'react-redux';

function Addbook() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({
          type: 'Add_Book',
          payload: {
            id: '',
            title: '',
            author: '',
          },
        })}
      >
        Submit
      </button>
    </div>
  );
}

export default Addbook;
