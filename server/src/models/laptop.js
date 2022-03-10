import mongoose from "mongoose";
const { Schema } = mongoose;
const laptopSchema = new Schema(
  {
    category: String,
    general: {
      name: String,
      brand: String,
      price: Number,
    },
    image: {
      medium: String,
      large: String,
    },
    screen: {
      size: Number,
      resolution: String,
    },
    processor: {
      model: String,
      model_number: String,
    },
    storage: { storageType: String, capacity: Number },
    memory: { memoryType: String, capacity: Number },
    graphics: {
      graphicsType: String,
      graphics: String,
    },
  },
  { timestamps: true }
);
const Laptop = mongoose.model("laptops", laptopSchema);
export default Laptop;
