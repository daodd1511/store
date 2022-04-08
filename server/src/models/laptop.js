import mongoose from "mongoose";
const { Schema } = mongoose;
const laptopSchema = new Schema(
  {
    category: { type: String, required: true },
    general: {
      name: { type: String, required: true },
      brand: { type: String, required: true },
      price: { type: Number, required: true },
      sale_price: Number,
    },
    image: { type: String, required: true },
    screen: {
      type: Number,
      required: true,
    },
    processor: {
      type: String,
      required: true,
    },
    storage: {
      type: Number,
      required: true,
    },
    memory: { type: Number, required: true },
    graphics: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Laptop = mongoose.model("laptops", laptopSchema);
export default Laptop;
