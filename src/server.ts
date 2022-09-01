import { config } from "dotenv";
import express from "express";
config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}/`);
});
