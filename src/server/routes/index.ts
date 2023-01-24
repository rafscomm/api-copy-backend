import { Router } from 'express';
import {CidadesController, ServidoresController} from '../controllers';
const router = Router();

router.get('/', (_, res)=>{
  return res.send('Teste');
});

router.post('/cidades', CidadesController.createBodyValidation,CidadesController.createQueryValidation ,CidadesController.create);

export {router};