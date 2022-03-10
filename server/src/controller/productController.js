import LaptopService from "../services/laptopService.js";
import PhoneService from "../services/phoneService.js";
const ProductController = {};
ProductController.getAllProducts = async (req, res) => {
  try {
    const products = [];
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
    res.send(products);
  } catch (err) {
    console.error(err);
  }
};
ProductController.findProductById = async (req, res) => {
  try {
    const product = await LaptopService.findProductById(req.query.id);
    res.send(product);
  } catch (err) {
    console.error(err);
  }
};
ProductController.addProduct = async (req, res) => {
  try {
    await LaptopService.addProduct(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
};
ProductController.updateProduct = async (req, res) => {
  try {
    await LaptopService.updateProduct(req.params.id, req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
};
ProductController.deleteProduct = async (req, res) => {
  try {
    await LaptopService.deleteProduct(req.params.id).then((newProducts) =>
      res.send(newProducts)
    );
  } catch (err) {
    console.error(err);
  }
};
export default ProductController;
