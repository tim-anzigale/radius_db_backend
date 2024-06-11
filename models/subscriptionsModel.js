const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  name: String,
  password: { type: String },
  zcrm_id: { type: String },
  location: {
    type: { type: String, enum: ["Point"] },
    coordinates: { type: [Number] },
  },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan" },
  PPPoE: { type: String },
  mac_add: { type: String },
  usePublicIp: { type: Boolean, default: false },
  ips: { type: Object, default: {} },
  publicIps: { type: Object, default: {} },
  last_con: { type: Object },
  isDisconnected: Boolean,
  isTerminated: Boolean,
  statusLevel: { type: String },
}, { timestamps: { createdAt: "created_at" } });

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
