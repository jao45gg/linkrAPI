import { Router } from "express";
import usersRouter from "./users.routes.js";
import authRouter from "./auth.js";
import postsRouter from "./posts.routes.js";

const router = Router();

router.use("/", authRouter);
router.use("/users", usersRouter);
router.use("/posts", postsRouter);

export default router;