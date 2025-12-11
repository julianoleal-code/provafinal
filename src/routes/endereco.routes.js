import { Router } from "express";
import enderecoController from "../controllers/endereco.controller.js";

const router = Router();

router.post("/", enderecoController.createEnderecoController);
router.get("/", enderecoController.findAllEnderecoController);
router.get("/:id", enderecoController.findEnderecoByIdController);
router.put("/:id", enderecoController.updateEnderecoController);
router.delete("/:id", enderecoController.deleteEnderecoController);

export default router;
