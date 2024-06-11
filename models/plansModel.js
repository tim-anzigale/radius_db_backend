const mongoose = require('mongoose');

const planSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    limitStr: { type: String },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
