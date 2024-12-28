import { MainLayout } from '../../../components/layout/dashoard/MainLayout';
import { DashboardHeader } from '../../../components/Dashboard/header';
import BooksGrid from '../../../components/books/BooksGrid';

const Books = () => {
  return (
    <MainLayout>
      <div className='bg-red-400 w-full flex justify-between items-center p-4'>
        <DashboardHeader title="Books" subtitle="Your Books List Here" />
        <button>
          Add Book
        </button>
      </div>
      <BooksGrid />

      

    </MainLayout>
  );
};

export default Books;