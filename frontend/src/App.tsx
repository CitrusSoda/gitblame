import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { CodeQuestionCard } from './components/CodeQuestionCard';
import { Navbar } from './components/Navbar';
import { Button } from './components/ui/button';

function App() {
  const codeString = '(num) => num + 1';
  return (
    <div className="mx-auto max-w-3xl">
      <Navbar />
      <h1>Hello World!</h1>
      <Button>Click me</Button>
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {codeString}
      </SyntaxHighlighter>
      <CodeQuestionCard />
    </div>
  );
}

export default App;
