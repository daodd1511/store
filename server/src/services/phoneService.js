import Phone from "../models/phone.js";
const PhoneService = {};
PhoneService.getAllProducts = async () => {
  return await Phone.find();
};
PhoneService.findProductById = async (id) => {
  return await Phone.findById(id);
};
PhoneService.addProduct = async (productData) => {
  const product = new Phone(productData);
  await product.save();
};
PhoneService.updateProduct = async (id, productData) => {
  await Phone.findByIdAndUpdate(id, productData);
};
PhoneService.deleteProduct = async (id) => {
  await Phone.findByIdAndRemove(id);
  return await Phone.find();
};
export default PhoneService;
