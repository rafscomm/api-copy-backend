import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'
import { validation } from '../../shared/middlewares';

interface IQueryProps {
  page?: number,
  limit?: number,
  filter?: string,
}

const validaCidade : yup.SchemaOf<IQueryProps> = yup.object().shape({
  page: yup.number().notRequired().moreThan(0),
  limit: yup.number().notRequired().moreThan(0),
  filter: yup.string().notRequired()
})

export const getAllValidation = validation({
  body: validaCidade,
});

export const getAll = async (req:Request<{},{},{}, IQueryProps>, res:Response) =>{
  console.log(req.query);

  return res.send('Consulta realizada!');
};