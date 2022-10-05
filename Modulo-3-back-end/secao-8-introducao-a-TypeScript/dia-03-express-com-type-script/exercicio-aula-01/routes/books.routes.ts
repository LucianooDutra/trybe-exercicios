import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import { validationBook, validatePartialBook } from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);
router.get('/books/:id', booksController.getById);
router.post('/books/', validationBook, booksController.create);
router.put('/books/:id', validationBook, booksController.update);
router.patch('/books/:id', validatePartialBook, booksController.partialUpdate);
router.delete('/books/:id', booksController.remove);

export default router;