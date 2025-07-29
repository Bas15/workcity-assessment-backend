import { Router } from "express";
import {
  createProject,
  getProjects,
  getProjectsByClient,
  updateProject,
  deleteProject,
} from "../controllers/projectController";
import { protect } from "../middlewares/authMiddleware";
import { validateProject } from "../utils/validate";

const router = Router();

router.use(protect);

router.post("/", validateProject, createProject);
router.get("/", getProjects);
router.get("/client/:clientId", getProjectsByClient);
router.put("/:id", validateProject, updateProject);
router.delete("/:id", deleteProject);

export default router;
