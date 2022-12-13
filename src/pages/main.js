import { Link } from 'react-router-dom';
import Shelf from '../components/shelf';

export default function Main({ books, updateShelf }) {
  const filterBooks = (shelf) => {
    const filtered = books.filter((book) => book.shelf === shelf);
    return filtered;
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            title="Currently Reading"
            books={filterBooks('currentlyReading')}
            updateShelf={updateShelf}
          />
          <Shelf
            title="Want to Read"
            books={filterBooks('wantToRead')}
            updateShelf={updateShelf}
          />
          <Shelf
            title="Read"
            books={filterBooks('read')}
            updateShelf={updateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to={'/search'}>Add a book</Link>
      </div>
    </div>
  );
}
