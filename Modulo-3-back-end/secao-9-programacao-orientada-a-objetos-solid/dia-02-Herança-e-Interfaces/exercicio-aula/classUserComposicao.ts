interface User {
  id?: number;
  name: string;
  age: number;
}

class UserModel {
  private database: User[] = [];
  private lastId = 0;

  create(user: User) {
    const newUser = { ...user, id: this.lastId++ };
    this.database.push(newUser);

    return newUser;
  }

  getAll():User[] {
    return [ ...this.database ];
  }
}

class UserService {
  protected userModel: UserModel;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }

  create(user: User):User {
    if(user.age >200) {
      throw new Error('Idade avançada')
    }

    return this.userModel.create(user);
  }

  getAll(){
    return this.userModel.getAll();
  }
}

const userModel = new UserModel();

const userService = new UserService(userModel);

const capi = userService.create({
  name: 'capi',
  age: 18
});

const andre = userService.create({
  name: 'andre',
  age: 33
});

const fernanda = userService.create({
  name: 'fernanda',
  age: 22
});

console.log(userService.getAll());