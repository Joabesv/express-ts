import 'dotenv/config';

import logger from './utils/logger';
import server from './server';
import baseRoutes from './routes/base';
import routeExists from './middlewares/routeExists';

const { PORT } = process.env;

server.use(baseRoutes);
server.use(routeExists);

server.listen(PORT, () => {
  logger.info(`Server Started at port: ${PORT}`);
});

server.listen();
