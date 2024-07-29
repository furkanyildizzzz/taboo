import { StatusCodes } from 'http-status-codes';
import { ApiError } from './ApiError';

export class RuntimeError extends ApiError {
  constructor(message: string = 'Runtime error') {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
