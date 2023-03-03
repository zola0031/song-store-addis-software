import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";
import connectDB from "./src/config/dbConfig.js";

const swaggerFile = JSON.parse(await readFile("./swagger_output.json"));

import routes from "./src/routes/index.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use(routes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}/docs`
  )
);
