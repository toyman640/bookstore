import InputForm from './InputForm';
import '../App.css';

function Books() {
  const library = [
    {
      id: 1,
      book: 'Songs of ice and fire',
      author: 'Martin',
      category: 'Adventure',
    },
    {
      id: 2,
      book: '007',
      author: 'Bond',
      category: 'Action',
    },
    {
      id: 3,
      book: 'Star Wars',
      author: 'Boba Fett',
      category: 'Sci-Fi',
    },
    {
      id: 4,
      book: 'Star Trek',
      author: 'Spock',
      category: 'Sci-Fi',
    },
    {
      id: 5,
      book: 'Bond Master',
      author: 'Vander Wals',
      category: 'Thriller',
    },
  ];
  return (
    <div className="BookPage">
      <h1>Library</h1>
      {library.map((book) => (
        <div key={book.id}>
          <h2>{book.book}</h2>
          <p>
            Author:
            {book.author}
          </p>
          <p>
            Category:
            {book.category}
          </p>
          <button type="button">Delete</button>
        </div>
      ))}
      <InputForm />
    </div>
  );
}

export default Books;
