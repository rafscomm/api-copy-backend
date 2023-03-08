import { JWTService } from './../../shared/services/JWTService';
import { PasswordCrypto } from './../../shared/services/PasswordCrypto';
import { StatusCodes } from 'http-status-codes';
import { validation } from './../../shared/middlewares/Validation';
import * as yup from 'yup'
import { Request, Response } from 'express';
import { IUsuario } from './../../database/models/User';
import { UsurariosProvider } from '../../database/providers/usuarios';


interface IBodyProps extends Omit <IUsuario, 'id'| 'nome'>{}


export const logInValidation = validation((getSchema)=>({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().email().min(6),
        senha: yup.string().required().min(6)
    }))
}))

export const LogIn = async (req: Request<{},{}, IUsuario>, res: Response) =>{
    
    const {email,senha} = req.body
    const result = await UsurariosProvider.getByEmail(email)

    if (result instanceof Error){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Email ou senha são inválidos'
            }
        })
    }

    const verifyPass = await PasswordCrypto.verifyPassword(senha, result.senha)
    if(!verifyPass){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            errors: {
                default: 'Email ou senha são inválidos'
            }
        })
    }else{
        const acessToken = JWTService.sign({uid: result.id});
        if(acessToken === 'JWT_SECRET_NOT_FOUND'){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                errors: {
                    default: 'String JWT_SECRET não encontrada'
                }
            })
            
        }
        return res.status(StatusCodes.OK).json({acessToken})
    }

    
}