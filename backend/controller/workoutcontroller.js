const asyncHandler = require("express-async-handler");
const workoutplan = require("../model/workoutmodel");

exports.postworkoutplan = asyncHandler(async (req, res) => {
  const { trainerId, title, day1, day2, day3, day4, day5, day6, day7 } = req.body;
  console.log(req.body);

  try {
    const createPlan = await workoutplan.create({
      trainerId: trainerId,
      title: title,
      day1: day1,
      day2: day2,
      day3: day3,
      day4: day4,
      day5: day5,
      day6: day6,
      day7: day7,
    });

    res.status(201).json(createPlan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create a workout plan" });
  }
});


exports.getworkoutplan = asyncHandler(async (req, res) => {
  console.log("getworkoutplan called");
  const { id } = req.params;
  console.log(id)
  try {
    const listplan = await workoutplan.find({trainerId:id});
    console.log(listplan);
    res.json(listplan);
    console.log("successfully getworkoutplan");
  } catch (err) {
    res.status(500).send("failed to getplan items");
    console.log("failed to getplan items", err);
  }
});


exports.getworkoutplanall = asyncHandler(async (req, res) => {
  console.log("getworkoutplan called");
  try {
    const listplan = await workoutplan.find();
    // console.log(listplan);
    res.json(listplan);
    console.log("successfully getworkoutplan");
  } catch (err) {
    res.status(500).send("failed to getplan items");
    console.log("failed to getplan items", err);
  }
});


// delete workout plan 

exports.deleteWorkoutPlan =  asyncHandler(async (req, res) => {
    const id = req.params.id;
    try{
        const deletePlan = await workoutplan.findByIdAndDelete(id);
        if(deletePlan){
            res.send(deletePlan)
        }else{
            res.status(404).send("failed to delete")
        }
    }catch(err){
        res.status(500).send("failed to delete workout plan");
        console.log("failed to delete workout plan", err);
    }


});


exports.editgetworkoutplan = asyncHandler(async (req, res) => {
  const {id} = req.params;
  console.log("editgetworkoutplan")
  console.log(id)
  try{
    const editdataid = await workoutplan.findById(id);
    if(!editdataid){
      return res.status(404).json({error:"not found"})
    }
    res.json(editdataid);
  }catch(err){
    console.log("error",err);
    response.status(500).json({error:"internal server error"})
  }

})


exports.workoutplanUpdate = asyncHandler(async(req,res)=>{

const {id} = req.params
  console.log("1111111111111",id);
  const {title,day1,day2,day3,day4,day5,day6,day7} = req.body;
  console.log("77777777", title,day1,day2,day3,day4);
  try{
    let toupdate = await workoutplan.findById(id);
    toupdate.title=title;
    toupdate.day1=day1;
    toupdate.day2=day2;
    toupdate.day3=day3;
    toupdate.day4=day4;
    toupdate.day5=day5;
    toupdate.day6=day6;
    toupdate.day7=day7;

    let toSave = await toupdate.save();
    res.json(toSave);

  }catch(err){
    console.log(err);
    res.json(500).json({err: "internal server error"});

  }

})

