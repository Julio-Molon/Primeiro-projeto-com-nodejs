import { Router } from 'express';
import User from './app/models/user';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Julio César',
    email: 'juliomolon@live.com',
    password_hash: '123564541',
  });

  return res.json(user);
});

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;
