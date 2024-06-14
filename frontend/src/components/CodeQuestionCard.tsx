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

export const CodeQuestionCard = () => {
  const { theme } = useTheme();

  const codeString = `<Card>
  <CardHeader>
    <SyntaxHighlighter language="jsx" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  </CardHeader>
  <CardContent>
    <p>파이썬 이렇게 쓰는거 맞나요?</p>
  </CardContent>
  <CardFooter>
    <p>이거 해봤는데 이렇게 됐어요</p>
  </CardFooter>
</Card>`;

  return (
    <Card className={cn('w-[400px]')}>
      <CardHeader>
        <CardTitle>ShadCn 이렇게 쓰는거 맞나요?</CardTitle>
      </CardHeader>
      <CardContent>
        <SyntaxHighlighter
          language="jsx"
          style={theme === 'dark' ? atomDark : prism}
          className={cn('!line-clamp-3')}
        >
          {codeString}
        </SyntaxHighlighter>
      </CardContent>
      <CardFooter className="h-[100px]">
        <p className="line-clamp-4">
          이거 해봤는데 이렇게 됐어요 Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptates modi repudiandae, cumque ratione quaerat
          quam? Reiciendis aperiam distinctio commodi laudantium. Ullam
          doloribus voluptatum illo nostrum cumque! Eligendi soluta ullam
          itaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Laboriosam beatae aperiam ullam illo ad delectus blanditiis explicabo
          magnam voluptatem ipsa earum eius, tenetur asperiores excepturi!
          Minima ipsa sit inventore numquam.
        </p>
      </CardFooter>
    </Card>
  );
};
