import {Knex} from 'knex';
import path from 'path';
import 'dotenv/config';

export const development: Knex.Config = {
  client: 'mysql2',
  connection:{
    // filename: path.resolve(__dirname,'..', '..', '..','..', 'database.sqlite')
    host: process.env.SERVER_NAME,
    port: Number(process.env.PORT_DATABASE),
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME,

  },
  migrations:{
    // tableName: 'knex_migrations',
    directory: path.resolve(__dirname,'..', 'migrations')
  },
  seeds:{
    directory: path.resolve(__dirname,'..', 'seeds')
  },

  pool: {
    min: 2,
    max: 10,
  },
  // pool:{
  //   afterCreate: (connection: any, done: Function ) =>{
  //     connection.run('PRAGMA foreign_keys = ON');
  //     done();
  //   }
  // }

};
export const test: Knex.Config = {
  ...development,
  connection: ':memory:',
};
export const production: Knex.Config = {
  ...development
};
