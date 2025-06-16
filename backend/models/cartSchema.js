
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, 
      quantity: { type: Number, required: true, min: 1 } 
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);