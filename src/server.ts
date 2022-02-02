import express from 'express';
import * as database from './database';

import { noticiasRoutes } from './routes/noticias.routes';

database.connect();
const app = express();

app.use(express.json());

app.use(noticiasRoutes);

app.listen('5000', () => console.log("Aplicação Rodando"));