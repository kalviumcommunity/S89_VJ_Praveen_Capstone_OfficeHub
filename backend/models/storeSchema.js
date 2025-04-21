const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: String,
      quantity: Number
    }
  ],
  shippingAddress: { type: String, required: true }
}, { timestamps: true });

 const store = mongoose.model('StoreOrder', storeSchema);
 module.exports = store;