import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAll, update } from './utils/BooksAPI';
import Main from './pages/main';
import Search from './pages/search';

function App() {
  const [books, setBooks] = useState([]);

  const updateShelf = (id, shelf) => {
    update(id, shelf).then(() => getBooks());
  };

  const getBooks = async () => {
    const data = await getAll();
    setBooks(data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main books={books} updateShelf={updateShelf} />}
          />
          <Route
            path="/search"
            element={<Search books={books} updateShelf={updateShelf} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
