const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  user_id: {
    type: String
  }
});

module.exports = mongoose.model('Todo', TodoSchema);