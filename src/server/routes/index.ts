import { UsuariosController } from './../controllers/usuarios/index';
import { Router } from 'express';
import {CidadesController} from '../controllers';
import { ensureAuthenticated } from '../shared/middlewares';
const router = Router();

router.get('/', (_, res)=>{
  return res.send('Teste');
});


router.get('/cidades/:uf',ensureAuthenticated,CidadesController.getByUf,CidadesController.getByUf);


router.post('/entrar', UsuariosController.logInValidation, UsuariosController.LogIn);
router.post('/cadastrar', UsuariosController.createUserValidation ,UsuariosController.createUser);


export {router};