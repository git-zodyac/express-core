import { task_routes } from './routers/task.routes.js';
import { Routes } from '../public-api.js';

export const routes = Routes([
  {
    path: '/',
    method: 'get',
    handler: (req, res) => {
      return res.send('Hello, world!');
    },
  },
  {
    path: '/task',
    routes: task_routes,
  },
]);
