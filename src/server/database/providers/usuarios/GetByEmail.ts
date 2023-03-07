import { TableNames } from './../../ETableNames';
import { Knex } from "../../knex";
import { IUsuario } from "../../models";


export const getByEmail = async (email:string): Promise <IUsuario | Error> =>{
    try{
        const result = await Knex(TableNames.usuarios)
        .select('*')
        .where('email', '=', email)
        .first()
        if (result) return result;
        
        return new Error ('Erro ao consultar o registro')
    }catch(error){
        console.log(error);
        return new Error ('Erro ao consultar o registro')
   }
}