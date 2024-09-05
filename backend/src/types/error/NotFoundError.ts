import { StatusCodes } from 'http-status-codes';
import { ApiError } from './ApiError';

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(StatusCodes.NOT_FOUND, message);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
