import express from "express";
import ProductController from "../controller/productController.js";
const router = express.Router();
router.get("/products", (req, res) => {
  ProductController.getAllProducts(req, res);
});
router.get("/find", (req, res) => {
  ProductController.findProductById(req, res);
});
router.post("/add", (req, res) => {
  ProductController.addProduct(req, res);
});
router.put("/update", (req, res) => ProductController.updateProduct(req, res));
router.delete("/delete", (req, res) =>
  ProductController.deleteProduct(req, res)
);
export default router;
