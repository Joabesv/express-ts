import { NextFunction, Request, RequestHandler, Response } from 'express';
import logger from '../utils/logger';

const routeExists: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
  logger.error(`Route not find`);
  if (!req.route) {
    throw new Error(`Page not found`);
  }
  return next();
};

export default routeExists;
