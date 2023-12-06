import express from 'express';
import {pokeRouter,pokeTypeRouter} from './router/pokeRouter.js'
import cors from 'cors';
import fs from 'fs';

const PORT = process.env.PORT || 3001;
const app = express();
const html = fs.readFileSync('index.html','utf8')

app.use(cors());

app.get('/',(req,res)=>res.type('html').send(html));

app.use('/pokemon',pokeRouter);
app.use('/types',pokeTypeRouter);

app.listen(PORT,()=>console.log(`Server runs on Port: ${PORT}`));