const mongoose = require('mongoose');

const model = mongoose.model('Word', {
  english: {
    type: String,
    required: true,
  },
  hebrew: {
    type: String,
    required: true,
  },
  partOfSpeech: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true
  }
});

module.exports = model;