import express from "express";
import { createFeedback, getFeedback, deleteFeedback, updateFeedback } from "../controllers/feedback.js";
const router = express.Router()

router.post("/", createFeedback)

router.get("/", getFeedback)

router.put("/:id", updateFeedback)

router.delete("/:id", deleteFeedback)

export default router