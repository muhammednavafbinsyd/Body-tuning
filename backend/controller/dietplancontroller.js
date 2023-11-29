const asyncHandler = require("express-async-handler");
const dietplan = require("../model/dietmodel");

//POST DIET
exports.postdietplan = asyncHandler(async (req, res) => {
  const { trainerId, title, day1, day2, day3, day4, day5, day6, day7 } =
    req.body;
  console.log(req.body);

  try {
    const createplan = await dietplan.create({
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
    res.status(201).json(createplan);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to create a diet plan" });
  }
});

// GET DIET
exports.getdietplan = asyncHandler(async (req, res) => {
  console.log("getworkoutplan called");
  const { id } = req.params;
  console.log(id);
  try {
    const listplan = await dietplan.find({ trainerId: id });
    // console.log(listplan);
    res.json(listplan);
    console.log("successfully getworkoutplan");
  } catch (err) {
    res.status(500).send("failed to getplan items");
    console.log("failed to getplan items", err);
  }
});

exports.getdietplanall = asyncHandler(async (req, res) => {
  console.log("getworkoutplan called");
  try {
    const listplan = await dietplan.find();
    // console.log(listplan);
    res.json(listplan);
    console.log("successfully diet plan get");
  } catch (err) {
    res.status(500).send("failed to getplan items");
    console.log("failed to getplan items", err);
  }
});

// DELETE DIET
exports.deletedietPlan = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const deletePlan = await dietplan.findByIdAndDelete(id);
    if (deletePlan) {
      res.send(deletePlan);
    } else {
      res.status(404).send("failed to delete");
    }
  } catch (err) {
    res.status(500).send("failed to delete workout plan");
    console.log("failed to delete workout plan", err);
  }
});

// EDIT GET DIET

exports.editgetdietplan = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log("editgetdietplan");
  console.log(id);
  try {
    const editdataid = await dietplan.findById(id);
    if (!editdataid) {
      return res.status(404).json({ error: "not found" });
    }
    res.json(editdataid);
  } catch (err) {
    console.log("error", err);
    response.status(500).json({ error: "internal server error" });
  }
});

// UPDATE DIET PLAN

exports.dietplanUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, day1, day2, day3, day4, day5, day6, day7 } = req.body;
  try {
    let toupdate = await dietplan.findById(id);
    toupdate.title = title;
    toupdate.day1 = day1;
    toupdate.day2 = day2;
    toupdate.day3 = day3;
    toupdate.day4 = day4;
    toupdate.day5 = day5;
    toupdate.day6 = day6;
    toupdate.day7 = day7;

    let toSave = await toupdate.save();
    res.json(toSave);
  } catch (err) {
    console.log(err);
    res.json(500).json({ err: "internal server error" });
  }
});
