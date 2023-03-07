import { StatusCodes } from 'http-status-codes';
import { validation } from './../../shared/middlewares/Validation';
import * as yup from 'yup'
import { Request, Response } from 'express';
import { IUsuario } from './../../database/models/User';
import { UsurariosProvider } from '../../database/providers/usuarios';


interface IBodyProps extends Omit <IUsuario, 'id'>{}


export const createUserValidation = validation((getSchema)=>({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
        email: yup.string().required().email().min(6),
        senha: yup.string().required().min(6)
    }))
}))

export const createUser = async (req: Request<{},{}, IBodyProps>, res: Response) =>{
    const result = await UsurariosProvider.create(req.body)

    if (result instanceof Error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.CREATED).json(result)
}