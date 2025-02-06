import { Router } from "express";
import { registerStudent } from "../Controllers/StudentController.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = Router();

router.post(
  "",
  upload.fields([{ name: "nic" }, { name: "photo" }, { name: "passport" }]),
  registerStudent
);

export default router;
