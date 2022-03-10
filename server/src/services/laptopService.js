import Laptop from "../models/laptop.js";
const LaptopService = {};
LaptopService.getAllProducts = async () => {
  return await Laptop.find();
};
LaptopService.findProductById = async (id) => {
  return await Laptop.findById(id);
};
LaptopService.addProduct = async (productData) => {
  const product = new Laptop(productData);
  await product.save();
};
LaptopService.updateProduct = async (id, productData) => {
  await Laptop.findByIdAndUpdate(id, productData);
};
LaptopService.deleteProduct = async (id) => {
  await Laptop.findByIdAndRemove(id);
  return await Laptop.find();
};
export default LaptopService;
