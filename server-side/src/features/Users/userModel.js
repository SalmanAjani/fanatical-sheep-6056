const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 30,
      minLength: 4,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: true,
      minLength: 4,
    },
    phone: {
      type: Number,
      default: null,
    },
    gender: {
      type: String,
      default: null,
    },
    shipping: {
      type: String,
      default: null,
    },
    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
