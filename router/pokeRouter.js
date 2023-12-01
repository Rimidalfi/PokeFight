import express from "express";
import pokeViews from "../controller/pokeController.js"

const router = express.Router();

router.get('/', pokeViews.viewAll);
router.get('/:id', pokeViews.viewSpecific);
router.get('/:id/:info', pokeViews.viewSpecificDetail);

export default router;