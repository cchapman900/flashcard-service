const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const model = mongoose.model('User', {
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  words: [{
    word: {
      type: Schema.Types.ObjectId,
      ref: 'Word'},
    confidence: {
      type: Number
    }
  }]
});

module.exports = model;