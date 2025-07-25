const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
  platform: { type: String, required: true }, 
  logo: { type: String, required: true },      
  url: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Footer", footerSchema);
