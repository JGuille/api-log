import L from '../../common/logger';

let id = 0;
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: id++, name: 'user 0' },
  { id: id++, name: 'user 1' },
];

export class UsersService {
  all(): Promise<User[]> {
    // L.info('fetch all users', 'path: /users', 'method: get', 'username: user 1', JSON.stringify(users));
    L.info(users,'fetch all users, path: /users, method: GET, username: user 2');
    return Promise.resolve(users);
  }

  byId(id: number): Promise<User> {
    // L.info(JSON.stringify({id: 3, username: 'xx'}));
    L.error(`Cannot fecth user with id ${id}, path: /users/id, method: GET, username: user 2`);
    return this.all().then((r) => r[id]);
  }

  create(name: string): Promise<User> {
    L.info(`create user with name ${name} | path: /users, method: POST, username: user 2`);
    const example: User = {
      id: id++,
      name,
    };
    users.push(example);
    return Promise.resolve(example);
  }
}

export default new UsersService();
