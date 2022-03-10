import mongoose from "mongoose";
const { Schema } = mongoose;
const phoneSchema = new Schema(
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
    resolution: { type: String, required: true },
    keyspecs: {
      operating_system: { type: String, required: true },
      storage: { type: Number, required: true },
      memory: { type: Number, required: true },
      processor: { type: String, required: true },
      front_camera: { type: Number, required: true },
      rear_camera: { type: Number, required: true },
    },
  },
  { timestamps: true }
);
const Phone = mongoose.model("phones", phoneSchema);
export default Phone;
