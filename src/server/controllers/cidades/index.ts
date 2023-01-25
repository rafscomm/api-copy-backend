import * as create from './CreateCidades';
import * as GetAll from './GetAll';
import * as GetById from './GetById';
import * as UpdateById from './UpdateById';
import * as DeleteById from './DeleteById';

export const CidadesController ={
  ...create, ...GetAll, ...GetById, ...UpdateById, ...DeleteById
};
