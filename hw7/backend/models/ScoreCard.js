const mongoose =require('mongoose') ;

const Schema = mongoose.Schema;
const ScoreCardSchema = new Schema({
     // Number is shorthand for {type: Number}
  name: String,
  subject: String,
  score: Number
  
});

const User = mongoose.model('ScoreCard', ScoreCardSchema);

module.exports=User;