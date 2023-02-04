import express from 'express';

export const ROUTER_PREFIX = '/users';
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ users: [{ name: 'Jane Doe' }] });
});

router.route('/:id').get((req, res) => {
  res.status(200).json({
    name: 'Jane doe',
  });
});

export { router };
