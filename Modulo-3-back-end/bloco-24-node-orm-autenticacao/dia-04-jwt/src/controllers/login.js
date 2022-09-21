require('dotenv/config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */
  /* Estamos usando o método messages() para customizar as mensagens de erro das validações */
  Joi.object({
    username: Joi.string().min(5).alphanum().required().messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
    }),
  }).validate(body);

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const { error } = validateBody(req.body);

    if (error) return next(error);

    /* Se o login for admin e a senha estiver incorreta */
  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    /* Criamos um novo objeto de erro */
    const err = new Error('Invalid username or password');
    /* Adicionamos o status `401 Unauthorized` ao erro */
    err.statusCode = 401;
    /* Passamos o erro para o express, para que seja tratado pelo middleware de erro */
    return next(err);
  }

  /* Definimos admin como true se username e password estiverem corretos */
  const admin = req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const payload = {
      username: username,
      admin,
    };

    const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = { login };