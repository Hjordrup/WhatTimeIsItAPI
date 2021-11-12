const mongoose = require('mongoose');

const AlarmSchema = mongoose.Schema({
  time: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  msg: {
    type: String,
    default: 'There is no msg',
  },
});

module.exports = mongoose.model('Alarm', AlarmSchema);
