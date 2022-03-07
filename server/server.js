import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./src/router/router.js";
import connectDatabase from "./src/config/db.config.js";
connectDatabase();
const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
const PORT = 4000;
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
