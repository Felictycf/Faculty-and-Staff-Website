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
  //
  // department: {
  //   type: String,
  // },

  // office: {
  //   type: String,
  // },
  // faculty: {
  //   type: String,
  // },
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
    type: Array, // 多个数据存储
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
    type: Array, // 多个数据存储
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
    type: Array, // 多个数据存储
  },
  backgroundImage: {
    type: String,
  },

  // contributions: { type: Array }, // 多个数据存储

  highlights: {
    type: Array, // 多个数据存储
  },
});

module.exports = User = mongoose.model('users_2', UserSchema);
