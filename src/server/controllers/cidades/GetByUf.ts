import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'
import { providerGetByUf } from '../../database/providers/cidades/ProviderCreate';
import { validation } from '../../shared/middlewares';

interface IParamsProps {
 uf: string
}

const validaParamsCidade : yup.SchemaOf<IParamsProps> = yup.object().shape({
  uf: yup.string().required().min(2).max(2)
})

export const getByUfValidation = validation({
  params: validaParamsCidade,
});

export const getByUf = async (req:Request<IParamsProps>, res:Response) =>{
   if(!req.params.uf){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors:{
        default: 'A uf precisa ser informada'
      }
    });
   }

   const result = await providerGetByUf(req.params.uf);
   if (result instanceof Error){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({errors:{
      default: result.message
    }})
   }
   return res.status(StatusCodes.OK).json(result)
};