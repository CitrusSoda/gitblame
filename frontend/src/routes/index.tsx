import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, createFileRoute } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: () => (
    <div className="container h-[calc(100vh-64px)]">
      <div className="flex h-full flex-col items-center justify-center gap-y-24">
        <h1 className="text-6xl font-bold">CodeBlame</h1>
        <p className="text-foreground/60 dark:text-foreground/60 text-2xl font-medium">
          알 수 없는 코드를 분석받아보거나 여러분들의 지식으로 코드를
          분석해보세요!
        </p>
        <Button
          className={cn(
            'flex w-48 items-center justify-center gap-x-2 py-4 text-lg',
          )}
          asChild
        >
          <Link to="/blame">
            Blame Code! <ChevronRight strokeWidth={0.8} className="size-6" />
          </Link>
        </Button>
      </div>
    </div>
  ),
});
