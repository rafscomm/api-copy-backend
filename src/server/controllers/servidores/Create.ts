import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup'

interface IServidor {
  nome: string;
  acesso?:string ;
  senha?:string;
  config?:string;
}
const validaServidor : yup.SchemaOf<IServidor> = yup.object().shape({
  nome: yup.string().required().min(3),
  acesso: yup.string().min(3),
  senha: yup.string().min(3),
  config: yup.string().min(10)
})

export const create = async (req:Request<{},{}, IServidor>, res:Response) =>{

  let validateData : IServidor | undefined = undefined;
  try {
    validateData = await validaServidor.validate(req.body, {abortEarly: false})
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const errors : Record<string,string> ={};
    yupError.inner.forEach((error) =>{
      if(!error.path) return;
      errors[error.path] = error.message;
    })
    return res.status(StatusCodes.BAD_REQUEST).json({errors})
  }

  return res.send('Criado o cadastro!');
};