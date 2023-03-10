import express from 'express';
import {router} from './routes';
import cors from 'cors'
import 'dotenv/config';
import './shared/services/traducoesYup';
const server = express();

server.use(router);
server.use(express.json());
server.use(cors({origin: process.env.ENABLED_CORS?.split(';') || []}));

export {server};