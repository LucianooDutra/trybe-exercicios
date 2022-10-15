import { Router } from 'express';
import PlantController from '../controllers/PlantsController';

const router = Router();

const plantController = new PlantController();

router.get('/', plantController.getAll);

router.get('/:id', plantController.getById);

router.delete('/:id', plantController.delete);

router.put('/:id', plantController.update);

router.post('/', plantController.create);

export default router;