const mongoose = require('mongoose');

const commonFields = {
  id: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  company: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String }
};

const commonField = {
  id: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  brand: { type: String, required: true },
  company: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String }
};
// Laptops Schema
const laptopSchema = new mongoose.Schema(commonFields);

// Shoes Schema
const shoeSchema = new mongoose.Schema(commonField);

// Perfumes Schema
const perfumeSchema = new mongoose.Schema(commonFields);

// Watches Schema
const watchSchema = new mongoose.Schema(commonFields);
const StationarySchema = new mongoose.Schema(commonFields);

// Accessories Schema
const accessorySchema = new mongoose.Schema(commonFields);
const DeviceSchema = new mongoose.Schema(commonFields);
// Exporting models
module.exports = {
  Laptop: mongoose.model('Laptop', laptopSchema),
  Shoe: mongoose.model('Shoe', shoeSchema),
  Perfume: mongoose.model('Perfume', perfumeSchema),
  Watch: mongoose.model('Watch', watchSchema),
  Accessory: mongoose.model('Accessory', accessorySchema),
  Device: mongoose.model('Device', DeviceSchema),
  Stationary: mongoose.model('Stationary', StationarySchema)
};
