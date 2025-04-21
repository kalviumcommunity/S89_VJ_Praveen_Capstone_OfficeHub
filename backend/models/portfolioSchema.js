const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  bio: { type: String },
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      url: String
    }
  ],
  contact: {
    email: String,
    linkedin: String,
    github: String,
    phone: String
  }
}, { timestamps: true });

 const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
 module.exports = Portfolio;