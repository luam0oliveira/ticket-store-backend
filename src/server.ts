import { config } from "dotenv";
import express from "express";

import "reflect-metadata";
import "./shared/container";
import { routes } from "./routes";

config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}/`);
});
