import LaptopService from "../services/laptopService.js";
import PhoneService from "../services/phoneService.js";
const ProductController = {};
ProductController.getAllProducts = async (req, res) => {
  try {
    let products = [];
    switch (req.query.category) {
      case "laptop":
        products = await LaptopService.getAllProducts();
        break;
      case "phone":
        products = await PhoneService.getAllProducts();
        break;
      default:
        break;
    }
    console.log(products);
    res.send(products);
  } catch (err) {
    console.error(err);
  }
};
ProductController.findProductById = async (req, res) => {
  try {
    let product;
    switch (req.query.category) {
      case "laptop":
        product = await LaptopService.findProductById(req.query.id);
        break;
      case "phone":
        product = await PhoneService.findProductById(req.query.id);
        break;
      default:
        break;
    }
    res.send(product);
  } catch (err) {
    console.error(err);
  }
};
ProductController.addProduct = async (req, res) => {
  try {
    switch (req.body.category) {
      case "laptop":
        LaptopService.addProduct(req.body);
        break;
      case "phone":
        PhoneService.addProduct(req.body);
        break;
      default:
        break;
    }
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
};
ProductController.updateProduct = async (req, res) => {
  try {
    switch (req.body.category) {
      case "laptop":
        await LaptopService.updateProduct(req.query.id, req.body);
        break;
      case "phone":
        await PhoneService.updateProduct(req.query.id, req.body);
        break;
      default:
        break;
    }
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
};
ProductController.deleteProduct = async (req, res) => {
  try {
    switch (req.query.category) {
      case "laptop":
        await LaptopService.deleteProduct(req.query.id).then((newProducts) => {
          res.send(newProducts);
        });
        break;
      case "phone":
        await PhoneService.deleteProduct(req.query.id).then((newProducts) => {
          res.send(newProducts);
        });
        break;
      default:
        break;
    }
  } catch (err) {
    console.error(err);
  }
};
export default ProductController;
