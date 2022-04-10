import mongoose from "mongoose";
const { Schema } = mongoose;
const phoneSchema = new Schema(
  {
    category: { type: String, required: true },
    general: {
      name: { type: String, required: true },
      brand: { type: String, required: true },
      price: { type: Number, required: true },
      sale_price: Number,
    },
    image: { type: String, required: true },
    resolution: { type: String, required: true },
    storage: { type: Number, required: true },
    memory: { type: Number, required: true },
    processor: { type: String, required: true },
    camera: { type: Number, required: true },
  },
  { timestamps: true }
);
const Phone = mongoose.model("phones", phoneSchema);
export default Phone;
