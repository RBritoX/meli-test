import { Router } from 'express';

import ItemController from './controllers/ItemController';
import SearchController from './controllers/SearchController';

const routes = new Router();

routes.get('/items/:id', ItemController.index);
routes.get('/items/', SearchController.index);

export default routes;
