const launches = new Map();

let latestFlightNumber = 100;
let launch = {
  flightNumber: 100,
  mission: "Kepler Exploration x",
  rocket: "Explorer Is1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId){
  return launches.has(launchId);
}

function getAllLaunches(){
  return Array.from(launches.values());
}

function addNewLaunch(launch){
  latestFlightNumber++;
  const newLaunch = {
    ...launch,
    success: true,
    upcoming: true,
    customer: ['Zero to Mastery','NASA'],
    flightNumber: latestFlightNumber
  };
  launches.set(latestFlightNumber, newLaunch);
  return newLaunch;
}

function abortLaunchById(launchId){
  const aborted =launches.get(launchId);
  aborted.upcoming=false;
  aborted.success=false;
  return aborted;
}

export {existsLaunchWithId, getAllLaunches, addNewLaunch, abortLaunchById };
