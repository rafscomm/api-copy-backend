import * as  providerGetByEmail from './GetByEmail';
import * as  providerCreate from './Create';



export const UsurariosProvider = {
  ...providerGetByEmail, ...providerCreate
};