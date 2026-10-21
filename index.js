// run `node index.js` in the terminal
import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import Router from '@koa/router';
import itemRouter from './item/item-router.js';

import { getItem } from './item/item-controller.js';

const koa = new Koa();
const router = new Router();

koa.use(bodyparser());
router.get('/', getItem);
koa.use(router.routes());
koa.use(router.allowedMethods());

koa.listen(3000);
