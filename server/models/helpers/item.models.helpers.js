import ItemModel from '../item';

export const add = (data) => {
    try{
        return ItemModel.create(data);
    }catch (e){
    log(e);
    return Promise.resolve();
    }
}

export const find = (id) => {
    const condition = {
        _id: id
    };

    try {
        return ItemModel.findOne(condition).lean(true).exec();
    } catch (e) {
        console.log(e);
        return Promise.resolve();
    }
};

export const deleteById = (id) =>{
    const condition = {
        _id: id,
    }
    try {
        return ItemModel.findByIdAndRemove(condition).lean(true).exec();
    } catch (e) {
        log(e);

        return Promise.resolve();
    }
}