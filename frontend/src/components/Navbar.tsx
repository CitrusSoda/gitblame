import { Link } from '@tanstack/react-router';

import ThemeModeToggle from './theme/ThemeModeToggle';

export const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-16 w-screen items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-10">
        <Link to="/" className="text-2xl font-bold">
          ShadCn
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/blame" className="text-lg font-medium">
            Blame
          </Link>
          <Link to="/about" className="text-lg font-medium">
            About
          </Link>
        </div>
      </div>
      <ThemeModeToggle />
    </header>
  );
};
