import { Knex } from '../../knex';
import { ICidade } from '../../models';
import {ETableNames} from '../../ETableNames';

export const providerCreate = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> =>{
  try {
    const [result] =  await Knex(ETableNames.cidades).insert(cidade).returning('id');
    if (typeof result === 'object') {
      return result.id;
    } else if (typeof result === 'number'){
      return result;
    }
    return new Error ('Erro ao cadastrar');
  } catch (error) {

    return new Error('Erro ao cadastrar');
  }


};