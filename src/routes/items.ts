import express from "npm:express";

const router = express.Router();
router.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    message: "Todos los items",
  });
});
export { router };
