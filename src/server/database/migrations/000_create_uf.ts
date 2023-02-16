import { Knex } from 'knex';
import { TableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(TableNames.uf, table =>{
      table.bigIncrements('id').index();
      table.string('uf',2).primary().unique()

    })
    .then(() =>{
      return knex
        .schema
        .createTable(TableNames.cidades, table =>{
          table.bigIncrements('id').index().primary();
          table.string('municipio',255);
          table.string('uf',2).references('uf').inTable(TableNames.uf).unique();
        })
      console.log(`#Criado a tabela ${TableNames.uf}`);
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