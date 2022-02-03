import express from 'express';
import * as database from './database';
import cors from 'cors';

import { noticiasRoutes } from './routes/noticias.routes';

const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

database.connect();
const app = express();
app.use(cors(options));
app.use(express.json());
app.use(noticiasRoutes);

app.listen('5000', () => console.log("Aplicação Rodando"));