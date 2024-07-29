import { StatusCodes } from 'http-status-codes';
import { ApiError } from './ApiError';

export class HardwareFailureError extends ApiError {
  constructor(message: string = 'Hardware failure') {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
