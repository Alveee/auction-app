const mongoose = require("mongoose");
const { Schema } = mongoose;

const biddingSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    productId: { type: Schema.Types.ObjectId, ref: "Product" },
    amount: Number,
    isAutoBiddingEnabled: { type: Schema.Types.Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Bidding
 */
const Bidding = mongoose.model("Bidding", biddingSchema);

module.exports = Bidding;
