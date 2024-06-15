import { CodeQuestionForm } from '@/components/CodeQuestionForm';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/codequestion')({
  component: () => (
    <div className="container w-full py-10">
      <CodeQuestionForm />
    </div>
  ),
});
