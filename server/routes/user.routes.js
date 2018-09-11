import * as UserController from '../controllers/user.controllers';

export default (app) => {
    const routing = `/api`;

    // app.route(`${routing}/users`)
    // .get(UserController.fetch);

    app.route(`${routing}/users`)
    .post(UserController.create);


    // app.route(`${routing}/users/:userName`)
    // .get(UserController.findUser);
}