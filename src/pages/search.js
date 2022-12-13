import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../utils/BooksAPI';
import Book from '../components/book';

export default function Search({ books, updateShelf }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [invalidSearch, setInvalidSearch] = useState(false);

  const showError = () => {
    setInvalidSearch(true);
  };

  const hideError = () => {
    invalidSearch && setInvalidSearch(false);
  };

  const searchBooks = async () => {
    try {
      const results = await search(query);
      if (!results.error) {
        setResults(results);
        hideError();
      } else {
        throw new Error();
      }
    } catch (error) {
      showError();
    }
  };

  const filterResults = (r) => {
    const alreadyPicked = books.map((book) => book.id);

    return r.filter((result) => !alreadyPicked.includes(result.id));
  };

  const renderResults = invalidSearch
    ? null
    : filterResults(results)?.map((result) => (
        <Book
          key={result.id}
          id={result.id}
          title={result.title}
          authors={result.authors}
          cover={result.imageLinks?.thumbnail}
          updateShelf={updateShelf}
        />
      ));

  useEffect(() => {
    if (query) {
      searchBooks();
    } else {
      setResults([]);
      hideError();
    }
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to={'/'} className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>
      </div>
      {invalidSearch && <div className="search-error">No Books Found</div>}
      <div className="search-books-results">
        <ol className="books-grid">{query && renderResults}</ol>
      </div>
    </div>
  );
}
