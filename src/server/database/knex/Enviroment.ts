import {Knex} from 'knex';
import path from 'path';
import 'dotenv/config';

export const development: Knex.Config = {
  client: 'pg',
  connection:{
    // filename: path.resolve(__dirname,'..', '..', '..','..', 'database.sqlite')
    host: process.env.HOST_NAME,
    server: 'Dev',
    port:Number(process.env.PORT_DATABASE),
    user:  'postgres',
    password: 'gehmni',
    database:'copycenterdev'

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
