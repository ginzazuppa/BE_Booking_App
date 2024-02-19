import express from "express";
import { getAllDocumentations, addDocumentation, updateDocumentation, deleteDocumentation } from "../controllers/docController.js";

const router = express.Router();

router.get("/documentations", getAllDocumentations);
router.post("/add-documentation", addDocumentation);
router.put("/update-documentation/:id", updateDocumentation);
router.delete("/delete-documentation/:id", deleteDocumentation);

export default router;
