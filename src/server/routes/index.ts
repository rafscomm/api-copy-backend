import { Router } from 'express';
import {CidadesController} from '../controllers';
const router = Router();

router.get('/', (_, res)=>{
  return res.send('Teste');
});


router.get('/cidades/:uf',CidadesController.getByUf);


export {router};