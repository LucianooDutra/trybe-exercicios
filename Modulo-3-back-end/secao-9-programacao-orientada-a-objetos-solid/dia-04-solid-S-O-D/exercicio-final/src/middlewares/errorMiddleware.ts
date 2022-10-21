import { ErrorRequestHandler as Erro, NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import CustomError from '../errors/customErros';

const erroMiddleware: Erro = (err, _req: Request, res: Response, next: NextFunction) => {
  const { status, message } = err as CustomError;
  res.status(status || 500).json({ message });
};

export default erroMiddleware;
