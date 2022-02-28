/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Todo } from '@myorg/data';
import * as express from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const todo: Todo = { message: 'test', done: false };
const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to todos!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
