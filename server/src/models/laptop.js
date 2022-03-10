import mongoose from "mongoose";
const { Schema } = mongoose;
const laptopSchema = new Schema(
  {
    category: { type: String, required: true },
    general: {
      name: { type: String, required: true },
      brand: { type: String, required: true },
      price: { type: Number, required: true },
    },
    image: {
      medium: { type: String, required: true },
      large: { type: String, required: true },
    },
    screen: {
      size: { type: Number, required: true },
      resolution: { type: String, required: true },
    },
    processor: {
      model: { type: String, required: true },
      model_number: { type: String, required: true },
    },
    storage: {
      storageType: { type: String, required: true },
      capacity: { type: Number, required: true },
    },
    memory: {
      memoryType: { type: String, required: true },
      capacity: { type: Number, required: true },
    },
    graphics: {
      graphicsType: { type: String, required: true },
      graphics: { type: String, required: true },
    },
  },
  { timestamps: true }
);
const Laptop = mongoose.model("laptops", laptopSchema);
export default Laptop;
