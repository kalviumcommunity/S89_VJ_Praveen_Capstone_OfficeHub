const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  name: { type: String, required: true },
  bio: { type: String },
  skills: [String],
  projects: [String],
  contact:[String]
}, { timestamps: true });

 const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
 module.exports = Portfolio;