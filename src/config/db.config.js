import mongoose from "mongoose";
const connectDatabase = () => {
  console.log(`Connecting to database`);
  mongoose
    .connect(
      "mongodb+srv://psg9615:0358937727@learnnode.ydfqz.mongodb.net/learnnode?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log(`Could not connect to the database. Exiting now...\n${err}`);
      process.exit();
    });
};
export default connectDatabase;
