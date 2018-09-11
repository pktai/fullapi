import UserModel from '../user';

export const findAll = () => {
    const condition = {};

    try {
        return UserModel.find(condition).lean(true).exec();
    } catch (e) {
        console.log(e);
        return Promise.resolve();
    }
};

export const saveUser = (data) => {
    try {
        return UserModel.create(data);
    } catch (e) {
        log.error(e);

        return Promise.resolve();
    }
};

export const find = (userName) => {
    const condition = {
        userName
    };
    try {
        return UserModel.findOne(condition).lean(true).exec();
    } catch (e) {
        console.log(e);
        return Promise.resolve();
    }
};