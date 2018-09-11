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


export const saveUser = ({ title, content }) => {
    try {
      return UserModel.create({
       title,
       content,
      });
    } catch (e) {
      log.error(e);
  
      return Promise.resolve();
    }
  };
  

// export const find = (title) =>{
//     const condition = { title};
// try {
//     return UserModel.findOne(condition).lean(true).exec();
// } catch (e) {
//     console.log(e);
//     return Promise.resolve();
// }
// }
