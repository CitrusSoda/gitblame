import { getAuth } from '@hono/clerk-auth';
import { Hono } from 'hono';

export const codeQuestion = new Hono().get('/', (c) => {
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
});
