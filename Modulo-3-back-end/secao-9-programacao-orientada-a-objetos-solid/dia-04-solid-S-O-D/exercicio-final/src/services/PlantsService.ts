import PlantRepository from '../models/repository/PlantsRepository';
import Plant from '../models/entities/Plants';
import IPlant from '../models/entities/IPlants';

export default class PlantService {
  public static async create(plant: Plant): Promise<void> {

    const result = await PlantRepository.create(plant);
    return result;
  }

  public static async update(plant: Plant, plantId:number): Promise<IPlant> {

    const result = await PlantRepository.update(plant, plantId);
    return result;
  }

  public static async getAll(): Promise<IPlant[]> {

    const result = await PlantRepository.getAll();
    return result;
  }

  public static async getById(plantId: number): Promise<IPlant> {

    const result = await PlantRepository.getById(plantId);
    return result;
  }

  public static async delete(plantId: number): Promise<void> {

  await PlantRepository.delete(plantId);
  }

}