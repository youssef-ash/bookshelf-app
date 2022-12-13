export default function Book(props) {
  const displayAuthors = props.authors?.join(', ');

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.cover})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={props.shelf || 'none'}
              onChange={(e) => props.updateShelf(props.id, e.target.value)}
            >
              <option value="placeholder" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{displayAuthors}</div>
      </div>
    </li>
  );
}
