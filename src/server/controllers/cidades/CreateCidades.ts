import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'
import { validation } from '../../shared/middlewares';

interface ICidades {
  uf: string,
  municipio: string,
}

const validaCidade : yup.SchemaOf<ICidades> = yup.object().shape({
  uf: yup.string().required().min(2),
  municipio: yup.string().required().min(3)
})

export const createValidation = validation({
  body: validaCidade,
});

export const create = async (req:Request<{},{}, ICidades>, res:Response) =>{

  console.log(req.body);
  return res.send('Criado o cadastro!');
};