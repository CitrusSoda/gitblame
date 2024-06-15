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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/blame')({
  component: () => (
    <div className="container w-full overflow-hidden">
      <div className="my-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold">최근 질문들</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button>질문 작성</Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[70%] sm:max-w-none">
            <SheetHeader>
              <SheetTitle>문제점이 무엇인가요?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <h1>Hello World!</h1>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex gap-x-4">
        <CodeQuestionCard />
        <CodeQuestionCard className="hidden sm:block" />
        <CodeQuestionCard className="hidden xl:block" />
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
          <TableRow>
            <TableCell className="font-medium">JSX</TableCell>
            <TableCell>Help</TableCell>
            <TableCell>Citrus</TableCell>
            <TableCell>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate aliquid dolore nostrum a ratione soluta culpa iste!
              Quod ipsam quia rerum odit hic! Explicabo, fugiat quibusdam eius
              excepturi laboriosam non.
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">JSX</TableCell>
            <TableCell>Help</TableCell>
            <TableCell>Citrus</TableCell>
            <TableCell>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate aliquid dolore nostrum a ratione soluta culpa iste!
              Quod ipsam quia rerum odit hic! Explicabo, fugiat quibusdam eius
              excepturi laboriosam non.
            </TableCell>
          </TableRow>
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
  ),
});
