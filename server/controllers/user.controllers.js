import {saveUser} from '../models/helpers/user.models.helper';
// import {formatSuccess} from '../utils/helpers/data-response.helper'; 

// import User from '../models/user';
// export const fetch = async (req, res) => {
//     const userData = await findAll();

//     res.json(userData);
// }

// export const findUser = async (req, res ) => {
//     const title = req.params.title;

//     const result = await find(title);
//     res.json(result);
// }
export const create = async (req,res)=> {
  const title = req.body.title;
  const content = req.body.content;
  const data = {
    title,
    content,
  }
    const result =  await saveUser(data);
    res.json(result);
};
