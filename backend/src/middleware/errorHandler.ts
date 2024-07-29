import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../types/error/ApiError';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  console.error(`Error: ${err.message}`);
  console.log({ err });
  const statusCode =
    err instanceof ApiError
      ? err.statusCode
      : StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode).send({
    success: false,
    errors:
      err instanceof ApiError
        ? err.toErrorResponse()
        : { name: err.name, message: err.message },
    stack: err.stack,
  });
};
