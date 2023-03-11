import express from "express";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { router } from "./routes/index.ts";

const env = await config();

const PORT = env.PORT || 8000;

const app = express();

app.use(router);

await app.listen(PORT);
console.log(`Api rest corriendo en http://localhost:${PORT}`);
