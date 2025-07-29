import { Router } from "express";
import {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientContoller";
import { protect, adminOnly } from "../middlewares/authMiddleware";
import { validateClient } from "../utils/validate";

const router = Router();

router.use(protect);

router.post("/", adminOnly, validateClient, createClient);
router.get("/", getClients);
router.get("/:id", getClientById);
router.put("/:id", adminOnly, validateClient, updateClient);
router.delete("/:id", adminOnly, deleteClient);

export default router;
