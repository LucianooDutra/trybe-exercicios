import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  private service: LoginService;
  constructor () {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const token = await this.service.login(email, password);
    return res.status(200).json(token)
  }
}