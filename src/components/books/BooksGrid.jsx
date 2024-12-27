import { useState, useEffect } from 'react';
import { BookCard } from './BookCard';
import { fetchBooks } from '../../services/booksService';

const BooksGrid = () => { 
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks(1, 6);
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  if (loading) {
    return <p className="flex items-center justify-center h-[70vh]">Loading...</p>;
  }

  if (!books.length) {
    return <p className="flex items-center justify-center h-[70vh]">No books available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard 
          key={book._id}
          book={book} 
          onDelete={(id) => setBooks(books.filter(b => b._id !== id))}
          onEdit={(updatedBook) => setBooks(books.map(b => b._id === updatedBook._id ? updatedBook : b))}
        />
      ))}
    </div>
  );
}

export default BooksGrid;