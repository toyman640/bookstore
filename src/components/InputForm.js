function InputForm() {
  return (
    <>
      <form>
        <input placeholder="Book title" />
        <select>
          <option value="" disabled selected hidden>Author</option>
        </select>
      </form>
    </>
  );
}

export default InputForm;
