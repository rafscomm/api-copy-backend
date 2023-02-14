import { Knex } from '../../knex';
import {TableNames} from '../../ETableNames';

export const providerGetByUf = async (uf: string): Promise<number | Error> =>{
  try {
    const [result] =  await Knex.where('uf', uf).select('municipio').from(TableNames.cidades).returning('id');
    if (typeof result === 'object') {
      return result.id;
    } else if (typeof result === 'number'){
      return result;
    }
    return new Error ('Erro ao retornar as cidades');
  } catch (error) {

    return new Error('Erro ao retornar as cidades');
  }

};