import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';

const router = new Router({
  prefix: '/items',
});
const controller = new ItemController();
router.get('/', controller.getItems.bind(controller));
router.get('/:id', controller.getItems.bind(controller));
router.patch('/:id', controller.updateItem.bind(controller));
router.delete('/:id', controller.deleteItem.bind(controller));
router.post('/', controller.createItem.bind(controller));
app.use(router.routes());
app.use(router.allowedMethods());
