/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { auth } from '@myorg/auth';
import { myLib } from '@myorg/my-lib';

const app = express();

console.log(auth());
app.get('/api', (req, res) => {
  res.send({ message: `Welcome to serverB! ${myLib()}` });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
