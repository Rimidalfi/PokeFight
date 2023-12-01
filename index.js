import express from 'express';
import pokeRouter from './router/pokeRouter.js'
import cors from 'cors';

const PORT = 8080 || 3000;
const app = express();

app.use(cors());

app.get('/',(req,res)=>res.send(`<h1>🐢 🦐 🐳</h1>`));

app.use('/pokemon',pokeRouter);

app.listen(PORT,()=>console.log(`Server runs on http://localhost:${PORT}`));