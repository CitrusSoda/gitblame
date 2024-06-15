import { CodeQuestionCard } from '@/components/CodeQuestionCard';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { api } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';

async function getAllCodeQuestions() {
  const result = await api['code-question'].$get();
  if (!result.ok) {
    throw new Error('Failed to fetch code questions');
  }
  return result.json();
}

const Blame = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['code-question'],
    queryFn: getAllCodeQuestions,
  });

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container w-full overflow-hidden">
      <div className="my-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold">최근 질문들</h1>
        <Button asChild>
          <Link to="/codequestion">질문 작성</Link>
        </Button>
      </div>
      <div className="flex gap-x-4">
        <CodeQuestionCard
          title={data?.result[0].title}
          code={data?.result[0].code}
          description={data?.result[0].description}
        />
        <CodeQuestionCard
          title={data?.result[1].title}
          code={data?.result[1].code}
          description={data?.result[1].description}
        />
        <CodeQuestionCard
          title={data?.result[2].title}
          code={data?.result[2].code}
          description={data?.result[2].description}
        />
      </div>
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">언어</TableHead>
            <TableHead className="w-[100px]">상태</TableHead>
            <TableHead className="w-[100px]">작성자</TableHead>
            <TableHead>제목</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isPending
            ? '...Loading'
            : data?.result.map((res) => (
                <TableRow>
                  <TableCell>{'언어'}</TableCell>
                  <TableCell>{'상태'}</TableCell>
                  <TableCell>{'작성자'}</TableCell>
                  <TableCell>{res.title}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export const Route = createFileRoute('/_authenticated/blame')({
  component: Blame,
});
