import { Request,  Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICidade } from '../../database/models';
import { CidadesProvider } from '../../database/providers/cidades';
import { validation } from '../../shared/middlewares';

interface IBodyProps extends Omit<ICidade, 'id'>{}

const validaCidade : yup.SchemaOf<IBodyProps > = yup.object().shape({
  uf: yup.string().required().min(2),
  municipio: yup.string().required().min(3)
});

export const createValidation = validation({
  body: validaCidade,
});

export const create = async (req:Request<{},{}, IBodyProps >, res:Response) =>{
  const result = await CidadesProvider.providerCreate(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      erros:{
        default: result.message
      }
    });
  }
  return res.status(StatusCodes.CREATED).json(result);
};