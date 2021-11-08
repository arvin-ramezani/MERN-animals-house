import { Router } from "express";
import { verifyRefreshToken } from "../controllers/verifyRefreshToken";

const router = Router();

// Refresh Token
router.post("/refresh-tokens", verifyRefreshToken);

export default router;
