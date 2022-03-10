import mongoose from "mongoose";
const { Schema } = mongoose;
const phoneSchema = new Schema(
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
    resolution: String,
    keyspecs: {
      operating_system: String,
      storage: Number,
      memory: Number,
      processor: String,
      front_camera: Number,
      rear_camera: Number,
    },
  },
  { timestamps: true }
);
const Phone = mongoose.model("phones", phoneSchema);
export default Phone;
