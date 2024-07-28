export abstract class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;

    // Maintain proper stack trace (only available on V8)
    // It helps to capture the stack trace of the error from anywhere in the application.
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = this.constructor.name;
  }

  abstract serializeErrors(): { message: string; field?: string }[];

  // Method to generate the complete error response
  toErrorResponse() {
    return {
      success: false,
      errors: this.serializeErrors().map((error) => ({
        name: this.name,
        ...error,
      })),
      stack: this.stack,
    };
  }
}
