import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./src/router/router.js";
import connectDatabase from "./src/config/db.config.js";
dotenv.config();
connectDatabase();
const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello world!");
});
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});
