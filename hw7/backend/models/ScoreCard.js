const mongoose =require('mongoose') ;

const Schema = mongoose.Schema;
const ScoreCardSchema = new Schema({
     // Number is shorthand for {type: Number}
  Name: String,
  Subject: String,
  Score: Number
  
});

const ScoreCard = mongoose.model('ScoreCard', ScoreCardSchema);

module.exports=ScoreCard;