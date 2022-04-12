import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();

app.listen(process.env.PORT, () => {
  console.log({ msg: 'Server started' });
});
