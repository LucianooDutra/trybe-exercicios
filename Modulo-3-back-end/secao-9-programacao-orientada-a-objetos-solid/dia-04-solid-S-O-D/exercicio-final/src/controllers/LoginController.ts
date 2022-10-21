require('dotenv/config');
import { Response, Request } from 'express';
const jwt = require('jsonwebtoken');
const { getByUserEmail } = require('../services/userService');

const secret = process.env.JWT_SECRET;

const isBodyValid = (email: string, password: string) => email && password;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (req: Request, res: Response):Promise<any> => {
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await getByUserEmail(email);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const payload = {
      id: user.dataValues.id,
      email,
    };
    const token = jwt.sign(payload, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};