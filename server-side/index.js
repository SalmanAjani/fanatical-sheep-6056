//imports
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

//connecting to database
const connect = async () => {
  return mongoose.connect(process.env.DB_URL);
};

//use
app.use(express.json());
app.use(cors());

//routes imports
const productRoutes = require("./src/features/Products/productRoute");
const userRoutes = require("./src/features/Users/userRoute");
const orderRoutes = require("./src/features/Orders/orderRoute");
const cartRoutes = require("./src/features/Carts/cartRoute");

//routes
app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);
app.use("/cart", cartRoutes);

//listening
app.listen(process.env.PORT, async () => {
  await connect();
  console.log(`listening on http://localhost:${process.env.PORT}`);
});
