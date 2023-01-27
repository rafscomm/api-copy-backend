import { Request,  Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { ICidade } from '../../database/models';
import { validation } from '../../shared/middlewares';

interface IParamsProps {
  id?: number
}
interface IBodyProps extends Omit<ICidade, 'id'> {
}
const validaParamsCidade : yup.SchemaOf<IParamsProps> = yup.object().shape({
  id: yup.number().required().integer().moreThan(0)
});

const validaBodyCidade : yup.SchemaOf<IBodyProps> = yup.object().shape({
  uf: yup.string().required().min(2),
  municipio: yup.string().required().min(3)
});

export const updateByIdValidation = validation({
  body: validaBodyCidade,
  params: validaParamsCidade
});

export const updateById = async (req:Request<IParamsProps,{},IBodyProps >, res:Response) =>{
  console.log(req.params);
  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Ainda em construção!');
};