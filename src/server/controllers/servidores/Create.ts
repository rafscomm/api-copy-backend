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



  return res.send('Criado o cadastro!');
};