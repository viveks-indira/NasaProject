import express from "express";
import { httpGetAllPlanets } from "../../controllers/planetsController.js";

const planetRouter = express.Router();

planetRouter.get("/", httpGetAllPlanets);

export default planetRouter;
