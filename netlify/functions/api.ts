import express, { Router } from "express";
import cors from "cors";
import serverless from "serverless-http";

import { generateRandomValue } from "../../src/utils/generateRandomValue";

const app = express();
const router = Router();

const INTERVAL = 3000;
const MAX_LENGTH = 10;
let latestValues: any[] = Array.from(
  { length: MAX_LENGTH },
  generateRandomValue
);

setInterval(() => {
  const newValue = generateRandomValue();
  latestValues.push(newValue);
  if (latestValues.length > MAX_LENGTH) {
    latestValues.shift();
  }
}, INTERVAL);

app.use(
  cors({
    origin: "localhost:3000",
  })
);
router.get("/get-stats", (_, res: any) => res.json(latestValues));

app.use("/api/", router);

export const handler = serverless(app);
