import Connection from '../connection';
import IPlant from '../entities/IPlants';
import Plant from '../entities/Plants';

// Inversão Independência
export default class PlantRepository {
  public static async create(newPlant: Plant): Promise<void> {
    // Open/Closed
    await Connection.execute(
      'INSERT INTO solid_example.plants' 
      + '(name, species) VALUES (?, ?)',
      [newPlant.name, newPlant.specie],
    );
  }

  public static async update(newPlant: Plant, plantId:number): Promise<IPlant> {
    await Connection.execute(
      'UPDATE solid_example.plants'
      + 'SET name=? specie=? WHERE id=?', [newPlant.name, newPlant.specie, plantId],
    );

    const getId = await this.getById(newPlant.id);

    return getId;
  }

  public static async getAll(): Promise<IPlant[]> {
    const result = await Connection.execute(
      'SELECT * FROM solid_example.plants', '',
    );
    const [rows] = result;
    return rows as IPlant[];
  }

  public static async getById(plantId: number): Promise<IPlant> {
    const result = await Connection.execute(
      'SELECT * FROM solid_example.plants WHERE id = ?',
      [plantId],
    );
    const [rows] = result;
    const [book] = rows as IPlant[];
    return book;
  }

  public static async delete(plantId: number): Promise<void> {
    await Connection.execute(
      'DELETE FROM solid_example.plants WHERE id=?', [plantId],
    );
  }
}