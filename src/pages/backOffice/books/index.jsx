// import { useState } from 'react';
// import { MainLayout } from '../../../components/layout/dashoard/MainLayout';
// import { DashboardHeader } from '../../../components/Dashboard/header';
// import BooksGrid from '../../../components/books/BooksGrid';
// import { Button } from '@/components/ui/button';
// import CreateModal from '../../../components/books/modals/CreateModal';
// import { createBook } from '@/services/booksService';

// const Books = () => {
//   const [isCreateModalOpen, setCreateModalOpen] = useState(false);

//   const handleCreateBook = (newBook) => {
//     // Handle book creation logic here
//     console.log('New Book Created:', newBook);
//     try {
//       createBook(newBook);
//     } catch (error) {
//       console.error('Error creating book:', error);
//     } 
//   };

//   return (
//     <MainLayout>
//       <div className='w-full flex justify-between p-4'>
//         <DashboardHeader title="Books" subtitle="Your Books List Here" />
//         <Button
//           type="button"
//           className="w-fit bg-black text-white hover:bg-gray-800"
//           onClick={() => setCreateModalOpen(true)}
//         > 
//           Add Book
//         </Button>
//       </div>

//       <BooksGrid />

//       <CreateModal
//         isOpen={isCreateModalOpen}
//         onClose={() => setCreateModalOpen(false)}
//         onBookCreated={handleCreateBook}
//       />
//     </MainLayout>
//   );
// };

// export default Books;


// pages/books/index.jsx
import { useState, useRef } from 'react';
import { MainLayout } from '../../../components/layout/dashoard/MainLayout';
import { DashboardHeader } from '../../../components/Dashboard/header';
import BooksGrid from '../../../components/books/BooksGrid';
import { Button } from '@/components/ui/button';
import CreateModal from '../../../components/books/modals/CreateModal';
import { createBook } from '@/services/booksService';
import { toast } from 'sonner';

const Books = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const booksGridRef = useRef(null);

  const handleCreateBook = async (newBook) => {
    try {
      const createdBook = await createBook(newBook);
      // Add the new book to the grid's state
      if (booksGridRef.current?.addBook) {
        booksGridRef.current.addBook(createdBook);
      }
      setCreateModalOpen(false);
      toast.success('Book created successfully');
    } catch (error) {
      console.error('Error creating book:', error);
      toast.error('Failed to create book');
    }
  };

  return (
    <MainLayout>
      <div className="p-6">
      <div className='w-full flex justify-between p-4'>
         <DashboardHeader title="Books" subtitle="Your Books List Here" />
         <Button
          type="button"
          className="w-fit bg-black text-white hover:bg-gray-800"
          onClick={() => setCreateModalOpen(true)}
        > 
          Add Book
        </Button>
      </div>

        <BooksGrid ref={booksGridRef} />

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