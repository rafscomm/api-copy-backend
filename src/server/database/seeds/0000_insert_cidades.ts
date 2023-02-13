
import { Knex } from 'knex';
import { insertAc, insertAl, insertAm, insertAp, insertBa, insertCe, insertDf, insertEs, insertGo, insertMa, insertMg, insertMs, insertMt, insertPa, insertPb, insertPe, insertPi, insertPr, insertRj, insertRn, insertRo, insertRr, insertRs, insertSc, insertSe, insertSp, insertTo } from '../../shared/utils';
import { TableNames } from '../ETableNames';





export const seed =async (knex: Knex ) =>{
  const [{count}]= await knex(TableNames.cidades).count<[{count: number}]>('* as count');

  if (count > 0) return;
  await knex(TableNames.cidades).insert(insertBa)
  await knex(TableNames.cidades).insert(insertAc)
  await knex(TableNames.cidades).insert(insertAl)
  await knex(TableNames.cidades).insert(insertAm)
  await knex(TableNames.cidades).insert(insertAp)
  await knex(TableNames.cidades).insert(insertCe)
  await knex(TableNames.cidades).insert(insertDf)
  await knex(TableNames.cidades).insert(insertEs)
  await knex(TableNames.cidades).insert(insertGo)
  await knex(TableNames.cidades).insert(insertMa)
  await knex(TableNames.cidades).insert(insertMg)
  await knex(TableNames.cidades).insert(insertMs)
  await knex(TableNames.cidades).insert(insertMt)
  await knex(TableNames.cidades).insert(insertPa)
  await knex(TableNames.cidades).insert(insertPb)
  await knex(TableNames.cidades).insert(insertPe)
  await knex(TableNames.cidades).insert(insertPi)
  await knex(TableNames.cidades).insert(insertPr)
  await knex(TableNames.cidades).insert(insertRj)
  await knex(TableNames.cidades).insert(insertRn)
  await knex(TableNames.cidades).insert(insertRo)
  await knex(TableNames.cidades).insert(insertRr)
  await knex(TableNames.cidades).insert(insertRs)
  await knex(TableNames.cidades).insert(insertSc)
  await knex(TableNames.cidades).insert(insertSe)
  await knex(TableNames.cidades).insert(insertSp)
  await knex(TableNames.cidades).insert(insertTo)

  console.log(count)

};