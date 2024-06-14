import { clerkMiddleware } from '@hono/clerk-auth';
import { Hono } from 'hono';
import { logger } from 'hono/logger';

import { codeQuestion } from './routes/code-question';

const app = new Hono();

app.use(logger());
app.use('*', clerkMiddleware());

const apiRoutes = app.basePath('/api').route('/code-question', codeQuestion);

export default app;
