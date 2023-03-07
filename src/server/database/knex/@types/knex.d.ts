import { ICidade, IUsuario } from '../../models';

declare module 'knex/types/tables' {
  interface Tables{
    cidades: ICidade
    uf: IUf
    usuario:IUsuario
  }
}