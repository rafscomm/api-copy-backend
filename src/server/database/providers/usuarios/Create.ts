import { TableNames } from './../../ETableNames';
import { Knex } from '../../knex';
import { IUsuario } from './../../models/User';



export const create = async (usuario: Omit<IUsuario,'id'>) : Promise< number | Error> => {
    try{
        const [result] = await Knex(TableNames.usuarios).insert(usuario).returning('id');
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