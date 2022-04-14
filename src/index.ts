import 'dotenv/config';

import logger from './utils/logger';
import server from './server';
import baseRoutes from './routes/base';
import routeExists from './middlewares/routeExists';
import connectDatabase from './database/connection';

const { PORT } = process.env;

server.use(baseRoutes);
server.use(routeExists);

(async () => {
  connectDatabase();
  server.listen(PORT, () => {
    logger.info(`Server Started at port: ${PORT}`);
  });
})();
