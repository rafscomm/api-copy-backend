
import * as CreateUser from './Create';
import * as LogIn from './LogIn';

export const UsuariosController ={
   ...CreateUser, ...LogIn
};
