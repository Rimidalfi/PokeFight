import express from "express";
import pokeViews from "../controller/pokeController.js"

const pokeRouter = express.Router();

pokeRouter.get('/', pokeViews.viewAll);
pokeRouter.get('/:id', pokeViews.viewSpecific);
pokeRouter.get('/:id/:info', pokeViews.viewSpecificDetail);

const pokeTypeRouter = express.Router();
pokeTypeRouter.get('/', pokeViews.viewTypes);

const pokeGameRouter = express.Router();
pokeGameRouter.post('/save', pokeViews.writeResults);
pokeGameRouter.get('/leaderboard', pokeViews.viewsResults);

export {pokeRouter,pokeTypeRouter,pokeGameRouter};