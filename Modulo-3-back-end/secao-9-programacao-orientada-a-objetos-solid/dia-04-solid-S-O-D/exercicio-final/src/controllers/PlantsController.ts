import { Request, Response } from 'express';
import Plant from '../models/entities/Plants';
import PlantService from '../services/PlantsService';

export default class PlantController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      await PlantService.create(req.body as Plant);
      res.status(201).json({
        message: 'Planta criada com sucesso!',
      });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const plantId = Number(id);
      const plant = await PlantService.update(req.body as Plant, plantId);
      res.status(200).json(plant);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }

  public async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const plants = await PlantService.getAll();
      res.status(201).json(plants);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const plantId = Number(id);
      const plant = await PlantService.getById(plantId);
      if(!plant) {
        res.status(404).json({ message: 'Plant not Found!' })
      }
      res.status(200).json(plant);
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const plantId = Number(id);
      await PlantService.delete(plantId);
      res.status(204).end();
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }

}