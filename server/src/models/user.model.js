const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name:  String,
        email: String,
        password: String,
        maxBidAmount: Number,
        bidAlertPercentage: Number,
    },
    {
        timestamps: true
    }
);

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
