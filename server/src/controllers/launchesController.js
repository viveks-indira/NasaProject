import {
  getAllLaunches,
  abortLaunchById,
  existsLaunchWithId,
  scheduleNewLaunch,
} from '../models/launches.model.js';

import { getPagination } from '../services/query.js'

async function httpGetAllLaunches(req, res) {
  const {skip,limit }=await getPagination(req.query);
  return res.status(200).json(await getAllLaunches(skip,limit));
}

async function httpAddNewLaunch(req, res) {
  const launchData = req.body;
  if (
    !launchData.mission ||
    !launchData.rocket ||
    !launchData.launchDate ||
    !launchData.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  const newLaunchData = await scheduleNewLaunch(launchData);
  return res.status(201).json(newLaunchData);
}

async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  console.log("Launch id :", launchId);

  const existsLaunch= await existsLaunchWithId(launchId);
 // console.log(existsLaunch)
  if (!existsLaunch) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  const aborted = await abortLaunchById(launchId);
 
  if(aborted!=1){
    return res.status(404).json({
      error:"Launch not aborted"
    });
  }else{

  return res.status(200).json(aborted);
  }
  
}

export { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
