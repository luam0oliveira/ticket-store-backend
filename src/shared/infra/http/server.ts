import "reflect-metadata";
import "@shared/container";
import { config } from "dotenv";

import app from "./app";

config();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}/`);
});
