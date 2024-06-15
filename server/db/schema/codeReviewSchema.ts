import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const codeReviewTable = pgTable('code_review_table', {
  id: serial('id').primaryKey(),
  userId: text('user_id').notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  code: text('code').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});
