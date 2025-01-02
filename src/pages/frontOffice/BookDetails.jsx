import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../../services/booksService';
import { FaStar } from "react-icons/fa6";
import BookLoader from '@/components/Loader/BookLoader';
// import { toast } from 'sonner';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const data = await fetchBookById(id);
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    getBook();
  }, [id]);

//   const handleReserve = async () => {
//     try {
//       await reserveBook(id);
//       toast.success('Book reserved successfully');
//     } catch (error) {
//       console.error('Error reserving book:', error);
//       toast.error('Failed to reserve book');
//     }
//   };

  if (!book) {
    return <BookLoader />;
  }

  return (
    <div className="container mx-auto mt-14 mb-12">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={book.image}
          alt={book.title}
          className="h-[300px] w-[200px] object-cover rounded-md"
        />
        <div className="md:ml-10 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-sm text-gray-700">{book.author}</p>
          <div className="flex items-center gap-1 mt-2">
            <FaStar className="text-yellow-500" />
            <span>{book.rating}</span>
          </div>
          <p className="mt-4">{book.description}</p>
          <p className="mt-4 text-sm text-gray-500">Published Date: {new Date(book.publishedDate).toLocaleDateString()}</p>
          <p className="mt-2 text-sm text-gray-500">Status: {book.status}</p>
          <button
            className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4"
            // onClick={handleReserve}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;