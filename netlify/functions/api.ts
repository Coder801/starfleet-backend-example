import express, { Router } from "express";
import serverless from "serverless-http";

import { generateRandomValue } from "../../src/utils/generateRandomValue";

const api = express();
const router = Router();
const INTERVAL = 10000;
let latestValue = generateRandomValue();

setInterval(() => {
  latestValue = generateRandomValue();
}, INTERVAL);

router.get("/get-stats", (req: any, res: any) => res.json({ stats: "stats" }));

api.use("/api/", router);

export const handler = serverless(api);
