const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new mongoose.Schema(
  {
    images: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    sizes: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      maxLength: 6,
    },
    off_price: {
      type: Number,
      required: true,
      maxLength: 6,
    },
    discount: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      maxLength: 4,
      default: 1,
    },
    reviews: [
      {
        name: { type: String, required: true },
        ratings: { type: Number, required: true },
        comment: { type: String, required: true },
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
