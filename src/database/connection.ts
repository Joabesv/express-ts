import mongoose from 'mongoose';
import 'dotenv/config';
import logger from '../utils/logger';

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const MONGO_URI = process.env.MONGO_URI!;

const connectDatabase = () => {
  /* eslint-disable no-new */
  new Promise<void>((resolve, reject) => {
    mongoose.connection
      // connection error
      .on('error', error => {
        logger.info(`Failed to conect`);
        reject(error);
      })
      // Connection timeOut
      .on('close', () => {
        logger.error('ERROR: Connection to MongoDB lost');
        process.exit(1);
      })
      .once('open', () => {
        const infos = mongoose.connections;
        infos.map(info => logger.info(`Connected to ${info.host}:${info.port}/${info.name}`));
        resolve();
      });

    logger.info('Mongo URL', MONGO_URI);

    mongoose.connect(MONGO_URI);
  });
};
export default connectDatabase;
