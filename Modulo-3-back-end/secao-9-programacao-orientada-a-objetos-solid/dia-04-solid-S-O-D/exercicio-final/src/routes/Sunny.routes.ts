import { Request, Response, Router } from 'express';
import Plants from '../Plants';

const router = Router();

const plantsModule = new Plants();

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const plant = await plantsModule.getPlantsThatNeedsSunWithId(id);
  res.status(200).json(plant);
});

export default router;