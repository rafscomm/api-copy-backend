
import * as GetAll from './GetAll';
import * as GetByUf from './GetByUf';
import * as UpdateById from './UpdateById';
import * as DeleteById from './DeleteById';

export const CidadesController ={
   ...GetAll, ...GetByUf, ...UpdateById, ...DeleteById
};
