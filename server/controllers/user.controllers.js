import {findAll ,saveUser, find} from '../models/helpers/user.models.helper';
import {formatSuccess, formatError} from '../utils/helpers/data-response.helper';
import sha1 from 'sha1';
import md5 from 'md5';

export const fetch = async (req, res) => {
    const userData = await findAll();

    res.json(formatSuccess({} ,userData));
}

export const findUser = async (req, res ) => {
    const userName = req.params.userName;

    const result = await find(userName);

    res.json(formatSuccess({},result));
}
export const create = async (req,res)=> {
  const userName = req.body.userName;
  const password = sha1(md5(req.body.password));
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const dateOfBirth = req.body.dateOfBirth;
  const sex = req.body.sex;
  const address = req.body.address;

  if (!userName) {
    res.json(formatError({
      message:'UserName is required'}));
  }

  if (!password) {
    res.json(formatError({
      message:'password is required'}));
  }

  if (!firstName) {
    res.json(formatError({
      message:'firstName is required'}));
  }

  if (!lastName) {
    res.json(formatError({
      message:'lastName is required'}));
  }

  if (!dateOfBirth) {
    res.json(formatError({
      message:'dateOfBirth is required'}));
  }

  if (!sex) {
    res.json(formatError({
      message:'sex is required'}));
  }

  if (!address) {
    res.json(formatError({
      message:'address is required'}));
  }

  const data = {
    userName,
    password,
    firstName,
    lastName,
    dateOfBirth,
    sex,
    address,
  }
    const result =  await saveUser(data);
    res.json(formatSuccess({
    },result));
};
