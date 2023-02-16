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
      table.string('numero').notNullable();
      table.string('cpf',11).unique().nullable()
      table.string('cnpj',14).unique().nullable()
      table.string('uf',2).references('uf').inTable(TableNames.uf)
      table.bigint('id_cidade').references('id').inTable(TableNames.cidades)
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