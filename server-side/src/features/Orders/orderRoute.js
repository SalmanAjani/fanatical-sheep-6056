const Product = require("../Products/productModel");
const Order = require("./orderModel");
const express = require("express");
const app = express.Router();
const { isAuthenticated, isAuthorize } = require("../../middleware/auth");

//Create order
app.post("/new", async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    userId,
  } = req.body;

  try {
    const order = await Order.create({
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
      user: userId,
    });
    return res
      .status(201)
      .send({ message: "Order created successfully", order });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

// get single order
app.get("", async (req, res) => {
  try {
    const order = await Order.findById(req.query.id).populate(
      "user",
      "name email role"
    );
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }
    return res.status(200).send({ success: true, order });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

// get orders of logged in user
app.get("/user", async (req, res) => {
  try {
    const order = await Order.find({ user: req.query.id });
    if (order.length === 0) {
      return res.status(404).send({ message: "No orders found" });
    }
    return res.status(200).send({ success: true, order });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

// get all orders
app.get("/all", async (req, res) => {
  try {
    const orders = await Order.find();
    if (orders.length === 0) {
      return res.status(404).send({ message: "No orders found" });
    }
    let totalAmount = 0;
    orders.forEach((order) => {
      totalAmount += order.totalPrice;
    });
    return res.status(200).send({ success: true, orders, totalAmount });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

//update order status
app.put("/update", async (req, res) => {
  try {
    const order = await Order.findById(req.query.id);

    if (order.orderStatus === "Delivered") {
      return res.status(400).send({ message: "Order already delivered" });
    }

    order.orderItems.forEach(async (order) => {
      await updateStock(order.product, order.quantity);
    });
    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
      order.deliveredAt = Date.now();
    }
    await order.save({ validateBeforeSave: false });
    return res
      .status(200)
      .send({ message: "Order updated successfully", order });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});
async function updateStock(id, quantity) {
  try {
    const product = await Product.findById(id);
    product.stock -= quantity;
    await product.save({ validateBeforeSave: false });
  } catch (err) {
    console.log(err);
  }
}

//delete order
app.delete("/delete", async (req, res) => {
  try {
    const order = await Order.findById(req.query.id);
    await order.remove();
    return res.status(200).send({
      success: true,
      message: "order deleted successfully",
    });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

module.exports = app;
