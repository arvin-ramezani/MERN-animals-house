import { Router } from "express";
import { fetchAllAnimals, likeAnimal } from "../controllers/animals.controller";
import { verifyAccessToken } from "../midleware/vifyToken";

const router = Router();

// Get Animals
router.get("/", fetchAllAnimals);

// Like Animal
router.patch("/likes", verifyAccessToken, likeAnimal);

export default router;
