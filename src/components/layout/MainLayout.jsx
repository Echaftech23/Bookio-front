import { Outlet } from 'react-router-dom';
import Header  from '../Navbar/Header';
import Footer from '../Footer/Footer';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
        <Header />

      {/* Main Content */}
      <main className="w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}
