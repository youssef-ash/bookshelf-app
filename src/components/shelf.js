import Book from './book';

export default function Shelf(props) {
  const displayBooks = props.books.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      authors={book.authors}
      cover={book.imageLinks?.thumbnail}
      shelf={book.shelf}
      updateShelf={props.updateShelf}
    />
  ));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{displayBooks}</ol>
      </div>
    </div>
  );
}
