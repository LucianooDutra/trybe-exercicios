import Joi from 'joi';
import jwt from 'jsonwebtoken';
import ILogin from '../interfaces/login.interface';
import IToken from '../interfaces/token.interface';
import IUser from '../interfaces/user.interface';
import BookModel from '../models/book.model';
import connection from '../models/connection';

export default class LoginService {
  private model: BookModel;
  constructor() {
    this.model = new BookModel(connection);
  }

  public async login(email:string, password:string): Promise<IToken> {
    const user: ILogin = {email, password};
    this.validateLogin(user);

    const userExists = await this.model.getByEmail(user.email);

    this.passwordIsValid(userExists, user);

    const token = this.genereteToken(userExists);
    return { token };
  }

  private genereteToken(user: IUser) {
    const payload = {
      id: user.id,
      name: user.name,
    }
    return jwt.sign(payload, 'senha')
  }

  private passwordIsValid(userDb: IUser, userLogin: ILogin) {
    if(userDb.password !== userLogin.password) {
      throw new Error('Invalid email or password')
    }
  }

  private validateLogin (user: ILogin) {
    const USERLOGIN = Joi.object({
      email: Joi.string().required().email().min(5).max(20),
      password: Joi.string().required().min(6).max(20)
    });

    const { error } = USERLOGIN.validate(user);
    if(error) throw new Error('User Login Is Not Valid')
  }
}