import * as express from 'express';
import { myLib } from '@myorg/my-lib';
const app = express();
app.get('/api', (req, res) => {
  res.send({ message: `Welcome to server-a!, use ${myLib()}.` });
});
// any fix server-a
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
