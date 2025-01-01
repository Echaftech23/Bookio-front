
import { BookCard } from './BookCard';

const BooksGrid = ({ books, onDelete, onEdit }) => {
  if (!books.length) {
    return <div className="text-center py-8">No books available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default BooksGrid;
