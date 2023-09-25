import { Router } from "express";
import TodoControllers from "../controllers/TodoControllers";

const router = Router();

// routing
router.get("/todos", TodoControllers.find);
router.get("/todo/:id", TodoControllers.findOne);
router.patch("/todo/:id", TodoControllers.update);
router.post("/todo", TodoControllers.create);
router.delete("/todo/:id", TodoControllers.delete);

export default router;
