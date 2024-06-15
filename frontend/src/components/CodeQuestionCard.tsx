import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useTheme } from './theme/ThemeProvider';

export const CodeQuestionCard = ({
  className,
  title,
  code,
  description,
}: {
  className?: string;
  title: string | undefined;
  code: string | undefined;
  description: string | undefined;
}) => {
  const { theme } = useTheme();

  return (
    <Card className={cn('w-[400px]', className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <SyntaxHighlighter
          language="jsx"
          style={theme === 'dark' ? atomDark : prism}
          className={cn('!line-clamp-3')}
        >
          {code}
        </SyntaxHighlighter>
      </CardContent>
      <CardFooter className="h-[100px]">
        <p className="line-clamp-4">{description}</p>
      </CardFooter>
    </Card>
  );
};
