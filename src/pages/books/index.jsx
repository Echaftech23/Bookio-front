import { MainLayout } from '../../components/layout/dashoard/MainLayout';
import { DashboardHeader } from '../../components/Dashboard/header';
import BooksGrid from '../../components/books/BooksGrid';

const Books = () => {
  return (
    <MainLayout>
      <DashboardHeader title="Books" subtitle="Your Books List Here" />
      <BooksGrid />
    </MainLayout>
  );
};

export default Books;