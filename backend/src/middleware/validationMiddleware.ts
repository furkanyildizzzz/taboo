import { Request, Response, NextFunction, RequestHandler } from 'express';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { UserGeneratedError } from '../types/error/UserGeneratedError';

export function validationMiddleware<T extends object>(
  type: new () => T,
): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const input = plainToClass(type, req.body);
    validate(input).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const messages = errors
          .map((error: ValidationError) =>
            Object.values(error.constraints || {}).join(', '),
          )
          .join(', ');
        //res.status(400).json({ message: messages });
        next(new UserGeneratedError(messages));
      } else {
        next();
      }
    });
  };
}
