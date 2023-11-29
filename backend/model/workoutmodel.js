const mongoose = require("mongoose");

const workoutschema = new mongoose.Schema({
  trainerId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  day1:{
    type: String,
    required: true,
  },
  day2: {
    type: String,
    required: true,
  },
  day3: {
    type: String,
    required: true,
  },
  day4: {
    type: String,
    required: true,
  },
  day5: {
    type: String,
    required: true,
  },
  day6: {
    type: String,
    required: true,
  },
  day7: {
    type: String,
    required: true,
  },
});

const workoutplan = new mongoose.model("workoutplan", workoutschema);
module.exports = workoutplan;

// const workoutPlanSchema = new mongoose.Schema({
//   trainerId: String,
//   title: String,
//   day1: String, // Make it optional by removing the 'required' constraint
//   day2: String,
//   day3: String,
//   day4: String,
//   day5: String,
//   day6: String,
//   day7: String
// });

// const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);
