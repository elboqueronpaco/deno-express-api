import express from "express";
import * as path from "https://deno.land/std@0.57.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

const router = express.Router();
for (const dirEntry of Deno.readDirSync(__dirname)) {
  const file = dirEntry.name.split(".").shift();
  if (file !== "index") {
    console.log(file);
    import(`./${file}.ts`).then((moduleRouter) => {
      router.use(`/api/v1/${file}`, moduleRouter.router);
    });
  }
}

export { router };
