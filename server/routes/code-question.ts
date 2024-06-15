import { getAuth } from '@hono/clerk-auth';
import { zValidator } from '@hono/zod-validator';
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
  .get('/', (c) => {
    const auth = getAuth(c);

    if (!auth?.userId) {
      return c.json({
        message: 'You are not logged in.',
      });
    }

    return c.json({
      message: 'You are logged in!',
      userId: auth.userId,
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
