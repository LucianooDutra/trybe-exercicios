const express = require('express');
const loginController = require('../controllers/login');
const meController = require('../controllers/me');
const validateJWT = require('../auth/validateJWT');
const validateAdmin = require('../auth/admin');
const topSecretController = require('../controllers/topSecret');

const exercicioRouter = express.Router();

exercicioRouter.post('/login', loginController.login);

exercicioRouter.get('/users/me', validateJWT, meController.me);

exercicioRouter.get('/top-secret', validateJWT, validateAdmin, topSecretController.topSecret);

// userBookRouter.post('/', employee.insert);

// userBookRouter.put('/:id', Books.update);

// userBookRouter.delete('/:id', Books.deleted);

module.exports = exercicioRouter;