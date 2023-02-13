import { Knex } from 'knex';
import { TableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(TableNames.clientes, table =>{
      table.bigIncrements('id').primary().index();
      table.string('rua', 255).notNullable();
      table.string('cep', 13).notNullable();
      table.string('bairro', 255).notNullable();
      table.string('complemento', 255).nullable();
      table.bigint('numero').nullable();
      table.string('uf_cidade',2).references(TableNames.cidades);
      table.string('municipio_cidade', 255).references(TableNames.cidades);
    })
    .then(() =>{
      console.log(`#Criado a tabela ${TableNames.clientes}`);
    })
    .catch((Error) =>{
      console.log(Error);
    });
}


export async function down(knex: Knex) {
  return knex.schema.dropTable(TableNames.clientes)
    .then(() =>{
      console.log(`#Dropando a tabela ${TableNames.clientes}`);
    });
}