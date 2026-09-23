const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "Please enter a valid email address"
        ]
      },

    password: {
      type: String,
      required: true,
      minlength: 6
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);