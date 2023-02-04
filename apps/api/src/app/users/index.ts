import express from 'express';
import mock from './users.json';

export const ROUTER_PREFIX = '/users';
const router = express.Router();

router.route('/').get((req, res) => {
  const filter = req.query.filter + '';

  res
    .status(200)
    .json((mock as any[]).filter((u) => new RegExp(filter, 'ig').test(u.name)));
});

router.route('/:id').get((req, res) => {
  const id = +req.params.id;

  const user = (mock as any).find((u) => u.id === id);

  if (!user) {
    return res.sendStatus(404);
  }

  res.status(200).json(user);
});

export { router };
