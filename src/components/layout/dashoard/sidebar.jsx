import { useState } from 'react';
import { LayoutDashboard, Book, Users, BookOpen, Settings, Menu } from 'lucide-react';
import { SidebarNav } from './sidebar-nav';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Book, label: 'Books', path: '/books' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: BookOpen, label: 'Emprents', path: '/emprents' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(menuItems[0].path);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div className={`h-screen bg-slate-950 text-white p-4 flex flex-col transition-width duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center gap-3 px-2 py-4">
        <button onClick={toggleSidebar}>
          <Menu className="h-6 w-6 mt-1 cursor-pointer" />
        </button>
        {isSidebarOpen && <span className="text-xl font-bold">Bookio</span>}
      </div>
      <SidebarNav items={menuItems} isOpen={isSidebarOpen} activeItem={activeItem} onItemClick={handleItemClick} />
    </div>
  );
}