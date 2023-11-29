const asyncHandler = require("express-async-handler");
const contactModel = require("../model/contactmodel");
const signupModel = require("../model/signupmodel")

exports.messageSending = asyncHandler(async (req, res) => {

  const { name, email, msg } = req.body;

  const sgndata =  await signupModel.findOne({email: email});
  console.log(sgndata);

  if(!sgndata){
    return res.status(400).json({ invalid: true, message: " invalid email" });
  }



  console.log(sgndata,"444444444444444444444444444")

  try {
    const data = await contactModel.create({
      name: name,
      email: email,
      msg: msg,
    });
    res.json(data);
  } catch (err) {
    console.log(err);
  }

});
