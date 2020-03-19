import { Router } from 'express';
var router = Router();

// Get all of the projects
router.get("/", (req, res, next) => {
  res.json(require("../public/data/projects.json"));
});

// Get a specific project
router.get("/:id", (req, res, next) => {
  let url = `../public/data/projects/${req.params["id"]}.json`;
  res.json(require(url));
});

export default router;