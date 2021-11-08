import { Router } from "express";
import { createAnimal } from "../controllers/admin.controller";
import { seedAnimals } from "../controllers/seed.controller";

const router = Router();

// Get Animals
router.get("/animals/create", createAnimal);

// Seed Data
router.get("animals/seed", seedAnimals);

export default router;
