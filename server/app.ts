import { clerkMiddleware } from '@hono/clerk-auth';
import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { logger } from 'hono/logger';

import { codeQuestion } from './routes/code-question';

const app = new Hono();

app.use(logger());
app.use('*', clerkMiddleware());

const apiRoutes = app.basePath('/api').route('/code-question', codeQuestion);

app.get('*', serveStatic({ root: './frontend/dist' }));
app.get('*', serveStatic({ path: './frontend/dist/index.html' }));

export default app;
export type ApiRoutes = typeof apiRoutes;
