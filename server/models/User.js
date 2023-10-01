const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
  },
  contact: {
    type: String,
  },

  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
  },

  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },

  password: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  department: {
    type: String,
  },

  office: {
    type: String,
  },
  faculty: {
    type: String,
  },
  phone: {
    type: String,
  },
  position: {
    type: String,
  },

  information: {
    type: String,
  },
  teaching: {
    type: Array,
  },

  contactInformation: {
    type: String,
  },
  contribution: {
    type: String,
  },
  researchAreas: {
    type: String,
  },
  publications: {
    type: Array,
  },
  template: {
    type: Number,
  },
  aacdimicPosition: {
    type: Array,
  },

  avibilitiy: {
    type: String,
  },
  Degtees: {
    type: String,
  },

  degrees: {
    type: Array,
  },
  backgroundImage: {
    type: String,
  },

  contributions: { type: Array },

  highlights: {
    type: Array,
  },
});

module.exports = User = mongoose.model('users_2', UserSchema);
