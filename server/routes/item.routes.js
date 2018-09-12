import * as ItemController from '../controllers/item.controllers';

export default (app) => {
    const routing = `/api`;

    app.route(`${routing}/items`)
    .post(ItemController.create);

    app.route(`${routing}/items/:id`)
    .get(ItemController.findItemById);
}