import Addbook from './Addbook';

function InputForm() {
  return (
    <>
      <form>
        <input placeholder="Book title" />
        <input placeholder="author" />
        <Addbook />
      </form>
    </>
  );
}

export default InputForm;
