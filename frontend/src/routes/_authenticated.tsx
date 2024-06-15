import { SignIn, useUser } from '@clerk/clerk-react';
import { Outlet, createFileRoute } from '@tanstack/react-router';

const Component = () => {
  const { user } = useUser();
  if (!user) {
    return (
      <div className="h-[calc(100vh-64px)] pt-4">
        <div className="flex h-full items-center justify-center gap-y-8">
          <SignIn />
        </div>
      </div>
    );
  }

  return <Outlet />;
};

export const Route = createFileRoute('/_authenticated')({
  component: Component,
});
