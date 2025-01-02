import { useState, useEffect } from 'react';
import { MainLayout } from '../../../components/layout/dashoard/MainLayout';
import { DashboardHeader } from '../../../components/Dashboard/header';
import CreateModal from '../../../components/books/modals/CreateModal';
import { fetchBooks, createBook } from '@/services/booksService';
import BooksGrid from '../../../components/books/BooksGrid';
import Pagination from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const { data, totalPages } = await fetchBooks(currentPage, 6);
        setBooks(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Error fetching books:', error);
        toast.error('Failed to load books');
      }
    };
    loadBooks();
  }, [currentPage]);

  const handleCreateBook = async (newBook) => {
    try {
      const createdBook = await createBook(newBook);
      setBooks((prevBooks) => [...prevBooks, createdBook]);
      setCreateModalOpen(false);
      toast.success('Book created successfully');
    } catch (error) {
      console.error('Error creating book:', error);
      toast.error('Failed to create book');
    }
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  const handleEditBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book._id === updatedBook._id ? updatedBook : book))
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MainLayout>
      <div className="p-6">
        <div className="w-full flex justify-between p-4">
          <DashboardHeader title="Books" subtitle="Your Books List Here" />
          <Button
            type="button"
            className="w-fit bg-black text-white hover:bg-gray-800"
            onClick={() => setCreateModalOpen(true)}
          >
            Add Book
          </Button>
        </div>

        <BooksGrid
          books={books}
          onDelete={handleDeleteBook}
          onEdit={handleEditBook}
        />

        <div className="flex justify-center mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        <CreateModal
          isOpen={isCreateModalOpen}
          onClose={() => setCreateModalOpen(false)}
          onBookCreated={handleCreateBook}
        />
      </div>
    </MainLayout>
  );
};

export default Books;