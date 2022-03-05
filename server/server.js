import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Product from "./models/products.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());
// Mongo URI
const dbURI =
  "mongodb+srv://psg9615:0358937727@learnnode.ydfqz.mongodb.net/learnnode?retryWrites=true&w=majority";
// Connect database
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));

const PORT = 4000;
app.listen(PORT);
// ----------Create---------------
app.post("/api/add", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((result) => {
      // res.redirect("/");
      res.sendStatus(200);
    })
    .catch((err) => res.sendStatus(500).json(err.message));
});
// ----------Read---------------
app.get("/api/products", (req, res) => {
  Product.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.sendStatus(500).json(err.message));
});
// ----------Update---------------
app.put("/api/update/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.sendStatus(500).json(err.message);
    });
  // const doc = await Product.findById(req.params.id);
  // res.send(doc);
});
// ----------Delete---------------
app.delete("/api/delete/:id", async (req, res) => {
  await Product.findByIdAndRemove(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      res.status(500).json(err.message);
    });
  // const doc = await Product.find();
  // res.send(doc);
});
