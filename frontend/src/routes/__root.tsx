import { Navbar } from '@/components/Navbar';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
    </>
  ),
});
