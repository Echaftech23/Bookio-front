import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import BookLoader from '../components/Loader/BookLoader';

const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const Dashboard = lazy(() => import('../pages/backOffice'));
const Home = lazy(() => import('../pages/frontOffice'));
const Books = lazy(() => import('../pages/backOffice/books'));
const BookDetails = lazy(() => import('../pages/frontOffice/BookDetails'));

function AppRouter() {
  return (
    <Suspense fallback={<BookLoader />}>
      <Routes>
        <Route path="/loader" element={<BookLoader />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="books" element={<Books />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;