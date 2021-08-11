const mongoose = require("mongoose");
const { Schema } = mongoose;
const quizData = require("./quizData");

const OptionSchema = new Schema({
  text:String,
  isRight:String
})

const QuestionSchema = new Schema({
  question:String,
  points:Number,
  options:[OptionSchema]
})

const QuizSchema = new Schema({
  quizName:String,
  playTime:String,
  totalPoints:Number,
  totalQuestions:Number,
  descriptiom:Number,
  imageUrl:String,
  questions:[QuestionSchema],
})

const Quiz = mongoose.model("quiz",QuizSchema),

const addQuizzesToDatabase = async () => {
  try{
    quizData.forEach(quiz=>{
      const newQuiz = new Quiz(quiz);
      await newQuiz.save();
    });
    console.log("Quiz added to Database");
  }catch(error){
    console.log("Error adding data..",error);
  }
}

module.exports = { Quiz, addQuizzesToDatabase };