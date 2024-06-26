import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';
import { Link } from '@tanstack/react-router';
import { Github } from 'lucide-react';

import ThemeModeToggle from './theme/ThemeModeToggle';
import { Button } from './ui/button';

export const Navbar = () => {
  return (
    <header className="dark:bg-background fixed left-0 top-0 z-50 flex h-16 w-screen items-center justify-between bg-white px-4 shadow-sm lg:px-48">
      <div className="flex items-center gap-10">
        <Link to="/" className="text-2xl font-bold">
          CodeBlame
        </Link>
        <div className="flex items-center gap-8">
          <Link
            to="/blame"
            className="hover:text-foreground dark:hover:text-foreground text-foreground/60 dark:text-foreground/30 [&.active]:text-foreground text-lg font-medium"
          >
            Blame
          </Link>
          <Link
            to="/about"
            className="hover:text-foreground dark:hover:text-foreground text-foreground/60 dark:text-foreground/30 [&.active]:text-foreground text-lg font-medium"
          >
            About
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-8">
        <ThemeModeToggle />
        <Button variant="outline" size="icon" asChild>
          <Link
            to="https://github.com/CitrusSoda/gitblame/tree/main"
            target="_blank"
          >
            <Github />
          </Link>
        </Button>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
