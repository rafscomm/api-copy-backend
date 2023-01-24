import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'

interface ICidades {
  uf: string,
  municipio: string,
}

interface IFilter {
  filter?: string;
}
const validaCidade : yup.SchemaOf<ICidades> = yup.object().shape({
  uf: yup.string().required().min(2),
  municipio: yup.string().required().min(3)
})

export const createBodyValidation: RequestHandler = async(req, res, next) =>{
  try {
    await validaCidade.validate(req.body, {abortEarly: false})
    return next();
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const errors : Record<string,string> ={};
    yupError.inner.forEach((error) =>{
      if(!error.path) return;
      errors[error.path] = error.message;
    })
    return res.status(StatusCodes.BAD_REQUEST).json({errors})
  }
}
const queryValidation : yup.SchemaOf<IFilter> = yup.object().shape({
  filter: yup.string().min(3)
})

export const createQueryValidation: RequestHandler = async(req, res, next) =>{
  try {
    await queryValidation.validate(req.query, {abortEarly: false})
    return next();
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const errors : Record<string,string> ={};
    yupError.inner.forEach((error) =>{
      if(!error.path) return;
      errors[error.path] = error.message;
    })
    return res.status(StatusCodes.BAD_REQUEST).json({errors})
  }
}



export const create = async (req:Request<{},{}, ICidades>, res:Response) =>{

  console.log(req.body);
  return res.send('Criado o cadastro!');
};