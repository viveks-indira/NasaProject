import { parse } from "csv-parse";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import planets from './planets.mongo.js'


function isHabitablePlanets(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    const __filename = fileURLToPath(import.meta.url); // Get the file path from the module URL
    const __dirname = path.dirname(__filename); // Get the directory path
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanets(data)) {
          //habitablePlanets.push(data);
          savePlanet(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", async () => {
        const countPlanetsFound=( await getAllPlanets()).length;
       // console.log(`The length of the array ${countPlanetsFound} .`);
        resolve();
      });
  });
}



async function getAllPlanets(){
  return await planets.find({},{
    '_id':0,'__v':0,
  });
}

async function savePlanet(planet){
  try {
    await planets.updateOne({
      keplerName:planet.kepler_name,
    },{
      keplerName:planet.kepler_name,
    },{
      upsert:true,
    });
  } catch (error) {
    console.log(`Could not save planet ${error}`);
  }
}

 
export { loadPlanetsData, getAllPlanets };
