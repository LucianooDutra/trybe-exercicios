import { NextFunction, Response, Request } from 'express';
const jwt = require('jsonwebtoken');
// import CustomError from '../errors/customErros';
import 'dotenv/config';

// export interface IRequest extends Request {
//   email?: string | JwtPayload;
// }

export interface IRequest extends Request {
  header: any;
  user: string;
}

const SECRET = process.env.JWT_SECRET;

const tokenValidation = (req: IRequest, res: Response, next: NextFunction) => {

  const token = req.header('Authorization');
  // console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    // console.log(decoded);
    const user = await getByUserIdService(decoded.id);
    // console.log(user.dataValues);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  // const { authorization } = req.headers;

  // if (!authorization) {
  //   throw new CustomError(401, 'Token not found');
  // }

  // try {
  //   if (SECRET) {
  //     const payload = jwt.verify(authorization, SECRET);
  //     req.email = payload as unknown as IRequest;
  //     next();
  //   }
  // } catch (error) {
  //   throw new CustomError(401, 'Token must be a valid token');
  // }
};

export default tokenValidation;
