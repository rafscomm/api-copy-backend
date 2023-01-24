import express from 'express';
import {router} from './routes';
import 'dotenv/config';
import './shared/services/traducoesYup'
const server = express();

server.use(router);
server.use(express.json());

export {server};