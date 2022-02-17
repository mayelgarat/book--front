import { BookPreview } from "../cmps/BookPreview.jsx";

export function BookList({ books , onRemoveBook}) {

  if (!books) return <p>Loading...</p>;
  if (!books.length) return <p>No Books Yet!</p>;

  return books.map((book, idx) => {
    return <BookPreview key={idx} book={book}
     onRemoveBook={onRemoveBook}
     />;
  });
}
