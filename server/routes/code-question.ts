import { getAuth } from '@hono/clerk-auth';
import { zValidator } from '@hono/zod-validator';
import { desc } from 'drizzle-orm';
import { Hono } from 'hono';
import { z } from 'zod';

import { db } from '../db';
import { codeReviewTable } from '../db/schema/codeReviewSchema';

const codeQuestionSchema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string(),
});

export const codeQuestion = new Hono()
  .get('/', async (c) => {
    const result = await db
      .select()
      .from(codeReviewTable)
      .orderBy(desc(codeReviewTable.createdAt));
    return c.json({
      result,
    });
  })
  .post('/', zValidator('json', codeQuestionSchema), async (c) => {
    const auth = getAuth(c);
    const codeQuestion = await c.req.valid('json');

    if (!auth?.userId) {
      return c.json({
        message: 'You are not logged in.',
      });
    }

    const result = await db
      .insert(codeReviewTable)
      .values({ ...codeQuestion, userId: auth?.userId as string })
      .returning();

    c.status(201);
    return c.json({
      message: 'Code question created successfully',
      result,
    });
  });
