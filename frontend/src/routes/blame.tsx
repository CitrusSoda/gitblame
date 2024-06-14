import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blame')({
  component: () => <div>Hello /blame!</div>,
});
