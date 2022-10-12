interface Character {
  name: string;
  specialMove2: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [
  { id: 3, name: 'Abobora', specialMove2: 'Charge Shot' },
  { id: 4, name: 'Manteiga', specialMove2: 'Inhale' },
];

interface IModel {
  create: (character: Character) => Promise<DbCharacter>;
  update: (id: number, character: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
  findIndexById: (id: number) => Promise<DbCharacter> | number;
}

class LocalDbModel implements IModel {
  create = async (character: Character) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  };

  update = async (id: number, character: Character) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  };

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  getAll = async () => db;

  getById = async (id: number) => {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  };
}

class CharacterService {
  constructor(readonly model: IModel) {}

  async create(character: Character) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async findIndexById(id: number) {
    const findIndexById = await this.model.findIndexById(id);
    return ({ status: 200, data: findIndexById });
  }

  async update(id: number, character: Character) {
    const update = await this.model.update(id, character);
    return ({ status: 200, data: update });
  }

  async delete(id: number) {
    const update = await this.model.delete(id);
    return ({ status: 200, data: update });
  }

  async getAll() {
    const allCharacter = await this.model.getAll();
    return ({ status: 200, data: allCharacter });
  }

  async getById(id: number) {
    const allCharacter = await this.model.getById(id);
    return ({ status: 200, data: allCharacter });
  }

}

class MockedDbModel implements IModel {
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove2: 'Toad' };
  }

  async findIndexById(id: number) {
    console.log('character findIndexById');
    return { id: 1, name: 'Luciano', specialMove2: 'Força' };
  }

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove2: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove2: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove2: 'Inhale' },
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove2: 'Fireball' };
  }
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);
A.getById(4).then(console.log);

const B = new CharacterService(new MockedDbModel());
B.getAll().then(console.log);
B.getById(1).then(console.log);