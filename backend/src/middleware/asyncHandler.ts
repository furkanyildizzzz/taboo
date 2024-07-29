///* eslint-disable @typescript-eslint/no-explicit-any */
//import { NextFunction } from 'express';

///* eslint-disable @typescript-eslint/no-explicit-any */
//const asyncWrapper =
//  (fn: any) => (req: Request, res: Response, next: NextFunction) =>
//    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
//export default asyncWrapper;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, RequestHandler, Response, Request } from 'express';

type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<any>;

/**
 * Catches errors and passes them to the next callback
 * @param handler Async express request handler/middleware potentially throwing errors
 * @returns Async express request handler with error handling
 */
export default (handler: AsyncRequestHandler): RequestHandler => {
  return (req, res, next) => {
    return handler(req, res, next).catch((err) => next(err));
  };
};
