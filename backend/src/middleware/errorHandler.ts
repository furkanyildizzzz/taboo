import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../types/error/ApiError';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  console.error(`Error: ${err.message}`);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode).send(err.toErrorResponse());
};
