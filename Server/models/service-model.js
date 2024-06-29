const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

const Service = new model("Service", serviceSchema);

module.exports = Service;
