import express from "express";
import LaptopController from "../controller/laptopController.js";
import PhoneController from "../controller/phoneController.js";
const router = express.Router();
router.get("/products", (req, res) => {
  switch (req.query.category) {
    case "laptop":
      LaptopController.getAllProducts(req, res);
      break;
    case "phone":
      PhoneController.getAllProducts(req, res);
      break;
    default:
      break;
  }
});
router.get("/find", (req, res) => {
  switch (req.query.category) {
    case "laptop":
      LaptopController.findProductById(req, res);
      break;
    case "phone":
      PhoneController.findProductById(req, res);
      break;
    default:
      break;
  }
});
router.post("/add", (req, res) =>
  req.body.category == "laptop"
    ? LaptopController.addProduct(req, res)
    : PhoneController.addProduct(req, res)
);
router.put("/update/:id", (req, res) =>
  req.body.category == "laptop"
    ? LaptopController.updateProduct(req, res)
    : PhoneController.updateProduct(req, res)
);
router.delete("/delete/:id", (req, res) =>
  req.body.category == "laptop"
    ? LaptopController.deleteProduct(req, res)
    : PhoneController.deleteProduct(req, res)
);
export default router;
