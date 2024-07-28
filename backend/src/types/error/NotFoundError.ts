import { StatusCodes } from 'http-status-codes';
import { ApiError } from './ApiError';

export class NotFoundError extends ApiError {
  constructor(path: string) {
    super(StatusCodes.NOT_FOUND, `The requested path ${path} not found!`);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
