import ProductService from "../services/service.js";
const ProductController = {};
ProductController.getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.send(products);
  } catch (err) {
    console.error(err);
  }
};
ProductController.findProductById = async (req, res) => {
  try {
    const product = await ProductService.findProductById(req.params.id);
    res.send(product);
  } catch (err) {
    console.error(err);
  }
};
ProductController.addProduct = async (req, res) => {
  try {
    await ProductService.addProduct(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
};
ProductController.updateProduct = async (req, res) => {
  try {
    await ProductService.updateProduct(req.params.id, req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
};
ProductController.deleteProduct = async (req, res) => {
  try {
    await ProductService.deleteProduct(req.params.id).then((newProducts) =>
      res.send(newProducts)
    );
  } catch (err) {
    console.error(err);
  }
};
export default ProductController;
