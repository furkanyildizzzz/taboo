/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
import { ApiError } from './ApiError';
import { QueryFailedError } from 'typeorm';

export class DatabaseError extends ApiError {
  query: string;
  driverError: any;

  constructor(error: any) {
    // Call the parent constructor with the appropriate status code and message
    super(StatusCodes.INTERNAL_SERVER_ERROR, 'Database error');

    if (error instanceof QueryFailedError) {
      this.message = error.message;
      this.query = error.query;
      this.driverError = error.driverError;
    }
  }

  // Implement the abstract method to serialize errors
  serializeErrors() {
    return [
      {
        message: this.message,
        query: this.query,
        driverError: this.driverError.detail,
      },
    ];
  }
}
