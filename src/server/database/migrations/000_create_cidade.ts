import { Knex } from 'knex';
import { TableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(TableNames.cidades, table =>{
      table.bigIncrements('id').primary().index();
      table.string('uf', 2);
      table.string('municipio', 255);
    })
    .then(() =>{
      console.log(`#Criado a tabela ${TableNames.cidades}`);
    })
    .catch((Error) =>{
      console.log(Error);
    });
}


export async function down(knex: Knex) {
  return knex.schema.dropTable(TableNames.cidades)
    .then(() =>{
      console.log(`#Dropando a tabela ${TableNames.cidades}`);
    });
}