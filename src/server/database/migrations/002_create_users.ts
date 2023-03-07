import { Knex } from 'knex';
import { TableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(TableNames.usuarios, table =>{
      table.bigIncrements('id').index().primary();
      table.string('nome').notNullable().checkLength('>',3);
      table.string('email').index().unique().notNullable().checkLength('>',5);
      table.string('senha').notNullable().checkLength('>',6)
    })
    .then(() =>{
      console.log(`#Criado a tabela ${TableNames.usuarios}`);
    })
    .catch((Error) =>{
      console.log(Error);
    });
}


export async function down(knex: Knex) {
  return knex.schema.dropTable(TableNames.usuarios)
    .then(() =>{
      console.log(`#Dropando a tabela ${TableNames.usuarios}`);
    });
}