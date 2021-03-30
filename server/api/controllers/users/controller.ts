import UsersService from '../../services/users.service';
import { Request, Response } from 'express';
import L from '../../../common/logger';

export class Controller {
  all(_: Request, res: Response): void {
    UsersService.all().then((r) => res.json(r));
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params['id']);
    UsersService.byId(id).then((r) => {
      L.info(JSON.stringify(r));
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  create(req: Request, res: Response): void {
    UsersService.create(req.body.name).then((r) =>
      res.status(201).location(`/api/v1/users/${r.id}`).json(r)
    );
  }
}
export default new Controller();