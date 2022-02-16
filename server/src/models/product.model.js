const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: String,
    slug: String,
    description: String,
    minimumBidAmount: Number,
    image: String,
    closeDate: Date,
    lastBidAmount: Number,
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Product
 */
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
