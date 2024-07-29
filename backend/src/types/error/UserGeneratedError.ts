import { StatusCodes } from 'http-status-codes';
import { ApiError } from './ApiError';

export class UserGeneratedError extends ApiError {
  constructor(message: string = 'User generated error') {
    super(StatusCodes.BAD_REQUEST, message);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
