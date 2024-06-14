import { CodeQuestionCard } from '@/components/CodeQuestionCard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/blame')({
  component: () => (
    <div className="container flex gap-x-4">
      <CodeQuestionCard />
      <CodeQuestionCard />
      <CodeQuestionCard />
    </div>
  ),
});
