import { TableNames } from './../../ETableNames';
import { Knex } from '../../knex';
import { IUsuario } from './../../models/User';
import { PasswordCrypto } from '../../../shared/services';



export const create = async (usuario: Omit<IUsuario,'id'>) : Promise< number | Error> => {
    try{
        const hashed = await PasswordCrypto.hashPassword(usuario.senha)
        const [result] = await Knex(TableNames.usuarios).insert({...usuario, senha: hashed}).returning('id');
        if (typeof result === 'object'){
            return result.id
        }else if (typeof result ==='number'){
            return result
        }
        return new Error ('Erro ao cadastrar o usuario')
    } catch(error){
        console.log(error)
        return new Error ('Erro ao cadastrar o usuario')
    }
}