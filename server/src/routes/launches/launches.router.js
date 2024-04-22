import express from "express";
import { httpAddNewLaunch, httpGetAllLaunches,httpAbortLaunch } 
       from "../../controllers/launchesController.js";

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post('/',httpAddNewLaunch);
launchesRouter.delete('/:id',httpAbortLaunch);

export default launchesRouter;
