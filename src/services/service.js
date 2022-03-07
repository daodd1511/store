import Product from "../models/products.js";
const ProductService = {};
ProductService.getAllProducts = async () => {
  return await Product.find();
};
ProductService.findProductById = async (id) => {
  return await Product.findById(id);
};
ProductService.addProduct = async (productData) => {
  const product = new Product(productData);
  await product.save();
};
ProductService.updateProduct = async (id, productData) => {
  await Product.findByIdAndUpdate(id, productData);
};
ProductService.deleteProduct = async (id) => {
  await Product.findByIdAndRemove(id);
  return await Product.find();
};
export default ProductService;
