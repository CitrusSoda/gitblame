import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono();

app.use(logger());
app.get('/api', (c) => c.text('Hello World!'));

export default app;
