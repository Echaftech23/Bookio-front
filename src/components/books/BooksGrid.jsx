// BooksGrid.jsx
import { useState, useEffect } from 'react';
import { BookCard } from './BookCard';
import { fetchBooks } from '../../services/booksService';
import { toast } from 'sonner';

const BooksGrid = ({ onBooksLoad }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = async () => {
    setLoading(true);
    try {
      const data = await fetchBooks(1, 9);
      setBooks(data);
      onBooksLoad?.(data); // Optional callback to parent
    } catch (error) {
      console.error('Error fetching books:', error);
      toast.error('Failed to load books');
    } finally {
      setLoading(false);
    }
  };

  // Add new book to the grid without reloading
  const addBook = (newBook) => {
    setBooks(prev => [...prev, newBook]);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDelete = (id) => {
    setBooks((prev) => prev.filter((b) => b._id !== id));
  };

  const handleEdit = (updatedBook) => {
    setBooks((prev) =>
      prev.map((b) => (b._id === updatedBook._id ? updatedBook : b))
    );
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!books.length) {
    return <div className="text-center py-8">No books available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default BooksGrid;