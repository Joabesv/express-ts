import express, { Request, Response } from 'express';
import 'dotenv/config';
import logger from './utils/logger';

const app = express();
const { PORT } = process.env;

app.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'Server Started' });
});

app.listen(PORT, () => {
  logger.info(`Server Started at port: ${PORT}`);
});
