import { parse } from "csv-parse";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const habitablePlanets = [];

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
      .on("data", (data) => {
        if (isHabitablePlanets(data)) {
          habitablePlanets.push(data);
        }
        //console.log(data);
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`The length of the array ${habitablePlanets.length} .`);
        resolve();
      });
  });
}

const missionName = ["A", "B", "C", "D", "E"];
function getAllPlanets(){
  return habitablePlanets;
}

export const planets = habitablePlanets;
export { loadPlanetsData, getAllPlanets };
