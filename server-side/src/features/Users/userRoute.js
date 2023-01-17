const User = require("./userModel");
const express = require("express");
const app = express.Router();
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../../middleware/auth");

//Register User
app.post("/new", async (req, res) => {
  try {
    const { email } = req.body;
    const getUser = await User.findOne({ email });
    if (getUser) {
      return res.send({ message: "User already exists" });
    }
    const user = await User.create(req.body);
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return res
      .status(201)
      .send({ message: "user registered successfully", token, user });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

//User login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.send({ message: "User does not exist" });
    }
    if (user.password != password) {
      return res.send({ message: "Password is incorrect" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return res.status(200).send({ message: "Login successful", token, user });
  } catch (error) {
    return res.send({ message: "Something went wrong" });
  }
});

//get users
app.get("/", async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).send({ success: true, user });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

//get users details
app.get("/details", async (req, res) => {
  try {
    const user = await User.findById(req.query.id);
    return res.status(200).send({ success: true, user });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

//update user
app.put("/update", async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).send({ message: "User updated successfully", user });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

//delete user
app.delete("/delete", async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.query.id);
    return res.status(200).send({
      success: true,
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

module.exports = app;
