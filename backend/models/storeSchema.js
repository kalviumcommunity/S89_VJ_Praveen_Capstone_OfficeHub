const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  username: { type: String, required: true },
  items: { type: String, required: true},
  shippingAddress: { type: String, required: true }
}, { timestamps: true });

 const store = mongoose.model('storeOrder', storeSchema);
 module.exports = store;