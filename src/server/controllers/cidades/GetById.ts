import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'
import { validation } from '../../shared/middlewares';

interface IParamsProps {
 id?: number
}

const validaParamsCidade : yup.SchemaOf<IParamsProps> = yup.object().shape({
  id: yup.number().required().moreThan(0)
})

export const getByIdValidation = validation({
  params: validaParamsCidade,
});

export const getById = async (req:Request<IParamsProps>, res:Response) =>{
  console.log(req.params);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Em construção!');
};