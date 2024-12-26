import { Link, useLocation } from 'react-router-dom';

export function SidebarNav({ items, isOpen, activeItem, onItemClick }) {
  const location = useLocation();

  return (
    <nav className="mt-8">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              onClick={() => onItemClick(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path ? 'bg-white/10' : 'hover:bg-white/5'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {isOpen && <span>{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}