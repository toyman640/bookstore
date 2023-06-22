import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="Nav-bar">
      <div className="Navigation">
        <h1 className="Logo">Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
