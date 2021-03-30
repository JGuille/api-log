import L from '../../common/logger';

let id = 0;
interface Example {
  id: number;
  name: string;
}

const examples: Example[] = [
  { id: id++, name: 'example 0' },
  { id: id++, name: 'example 1' },
];

export class ExamplesService {
  all(): Promise<Example[]> {
    // L.info(JSON.stringify(examples), 'fetch all examples');
    L.info(JSON.stringify(examples),'fetch all examples, path: /examples, method: GET, username: user 1');
    // L.info('fetch all examples');
    // L.info(JSON.stringify(examples),'path: /users');
    // L.info('fetch all examples');
    return Promise.resolve(examples);
  }

  byId(id: number): Promise<Example> {
    // L.info(`fetch example with id ${id}`);
    L.error(`Cannot fecth example with id ${id}, path: /examples/id, method: GET, username: user 1`);
    return this.all().then((r) => r[id]);
  }

  create(name: string): Promise<Example> {
    const example: Example = {
      id: id++,
      name,
    };
    examples.push(example);
    L.info(example,`create example with name ${name} | path: /examples, method: POST, username: user 1`);
    return Promise.resolve(example);
  }
}

export default new ExamplesService();
