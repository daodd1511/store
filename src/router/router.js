import express from "express";
import ProductController from "../controller/controller.js";
const router = express.Router();
router.get("/products", (req, res) =>
  ProductController.getAllProducts(req, res)
);
router.get("/find/:id", (req, res) =>
  ProductController.findProductById(req, res)
);
router.post("/add", (req, res) => ProductController.addProduct(req, res));
router.put("/update/:id", (req, res) =>
  ProductController.updateProduct(req, res)
);
router.delete("/delete/:id", (req, res) =>
  ProductController.deleteProduct(req, res)
);
export default router;
