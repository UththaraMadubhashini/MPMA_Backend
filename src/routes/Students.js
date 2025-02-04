import { Router } from "express";
import { registerStudent } from "../Controllers/StudentController";

const router = Router();

router.post("/students", registerStudent);

export default router;
