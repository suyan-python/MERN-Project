const { Schema, model } = require("mongoose");

const contachSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
});

//creating collection
const Contact = new model("Contact", contachSchema);

module.exports = Contact;
