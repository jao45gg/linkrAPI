import { Router } from "express";
import usersRouter from "./users.routes.js";
import authRouter from "./auth.js";
import publishRouter from "./publish.js";
import postsRouter from "./posts.routes.js";
import hashRouter from "./hash.routes.js";

const router = Router();

router.use("/", authRouter);
router.use("/users", usersRouter);
router.use("/publish", publishRouter)
router.use("/posts", postsRouter);
router.use(hashRouter);

export default router;
