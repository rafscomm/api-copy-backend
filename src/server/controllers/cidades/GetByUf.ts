import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'
import { providerGetByUf } from '../../database/providers/cidades/ProviderCreate';
import { validation } from '../../shared/middlewares';

interface IQueryProps {
 uf: string
}

const validaParamsCidade : yup.SchemaOf<IQueryProps> = yup.object().shape({
  uf: yup.string().required().min(2).max(2)
})

export const getByUfValidation = validation({
  params: validaParamsCidade,
});

export const getByUf = async (req:Request<{},{},{},IQueryProps>, res:Response) =>{
  const result = providerGetByUf(req.query.uf)
  console.log(req.query.uf, result);
  return res.status(StatusCodes.ACCEPTED).send(result);
};