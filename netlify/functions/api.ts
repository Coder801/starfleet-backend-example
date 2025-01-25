import express, { Router } from "express";
import cors from "cors";
import serverless from "serverless-http";

import { generateRandomValue } from "../../src/utils/generateRandomValue";

const app = express();
const router = Router();

const INTERVAL = 10000;
let latestValue = generateRandomValue();

setInterval(() => {
  latestValue = generateRandomValue();
}, INTERVAL);

app.use(cors());
router.get("/get-stats", (req: any, res: any) => res.json(latestValue));

app.use("/api/", router);

export const handler = serverless(app);
