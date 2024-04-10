import { planets } from "../../models/planets.model.js";

export function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

export default {
  getAllPlanets,
};
