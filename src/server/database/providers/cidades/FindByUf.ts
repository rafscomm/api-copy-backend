import { Knex } from "../../knex";
import { TableNames } from "../../ETableNames";
import { ICidade } from "../../models";

export const providerGetByUf = async (
  uf: string
): Promise<ICidade[] | Error> => {
  try {
    const result= await Knex(TableNames.cidades)
      .select('municipio')
      .where("uf", "=", uf);
    if (result) return result;
    return new Error("Erro ao retornar as cidades");
  } catch (error) {
    console.log(error);
    return new Error("Erro ao retornar as cidades");
  }
};
