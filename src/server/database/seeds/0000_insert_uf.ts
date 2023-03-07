import { Knex } from "knex";
import { insertUfs } from "../../shared/utils";
import { TableNames } from "../ETableNames";

export const seed =async (knex: Knex ) =>{
    const [{count}]= await knex(TableNames.uf).count<[{count: number}]>('* as count');
  
    if (count > 0) return;
    await knex(TableNames.uf).insert(insertUfs);
  
    console.log(count)
  
  };