const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  userId: {type:String, required:true},
  name: {type: String, required: true},
  manufacturer: {type: String, required: true},
  description: {type: String, required: true},
  mainPepper: {type: String, required:true},
  imageUrl: {type: String, required: true},
  heat: {type: Number, required: true},
    // likes: {type: Number, required: true},
  // dislikes: {type: Number, required: true},
  // userLiked: {type: String, required: true, userId: true},
  // userDisliked: {type: String, required: true, userId: true},
});

module.exports = mongoose.model('sauces', sauceSchema);
