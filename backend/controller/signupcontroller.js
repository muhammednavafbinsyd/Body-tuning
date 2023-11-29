const asyncHandler = require("express-async-handler");
const signupModel = require("../model/signupmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");
const jwtSecretKey = "your_secret_key";
const jwtExpiration = "80d";

exports.signupform = asyncHandler(async (req, res) => {
  const {
    username,
    email,
    phonenumber,
    password,
    location,
    city,
    pin,
    country,
  } = req.body;
  try {
    const existinguser = await signupModel.findOne({ email });
    if (existinguser) {
      return res
        .status(400)
        .json({ invalid: true, message: "email already exists" });
    }

    const signuData = await signupModel.create({
      username: username,
      email: email,
      phonenumber: phonenumber,
      password: password,
      location: location,
      city: city,
      pin: pin,
      country: country,
    });
    console.log(signuData);
    res.json(signuData);
  } catch (err) {
    console.log(err);
  }
});

exports.login = asyncHandler(async (req, res) => {
  const { input1, input2 } = req.body;
  try {
    const userdata = await signupModel.findOne({ email: input1 });

    if (!userdata) {
      console.log("user not found");
      return res.status(404).json({ error: "user not found" });
    }
    const passwordMatch = await bcrypt.compare(input2, userdata.password);
    console.log(passwordMatch);

    if (passwordMatch) {
      const payload = {
        userId: userdata._id,
        email: userdata._email,
      };

      const token = jwt.sign(payload, jwtSecretKey, {
        expiresIn: jwtExpiration,
      });

      const userProfile = {
        id: userdata._id,
        username: userdata.username,
        email: userdata.email,
        phonenumber: userdata.phonenumber,
        // password:userdata.password,
        location: userdata.location,
        city: userdata.city,
        pin:userdata.pin,
        country:userdata.country,
        image: userdata.images,
      };
      res.status(200).json({
        token: token,
        user: userProfile,
      });
      console.log("user found");
      res.json({ token });
    } else {
      console.log("wrong password");
      res.status(401).json({ invalid: true, message: "invalid details" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

exports.Getusers = asyncHandler(async (req, res) => {
  try {
    const getUsers = await signupModel.find();
    res.json(getUsers);
  } catch (err) {
    console.log(err, "error get usersdataaaaaa");
  }
});

exports.editprofile = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const editdatas = await signupModel.findById(id);
    res.json(editdatas);
  } catch (err) {
    console.log(err, "error edit datas");
  }
});

exports.userDelete = asyncHandler(async (req, res) => {
  console.log("user deleted");
  const id = req.params.id;
  try {
    const deletesigned = await signupModel.findByIdAndDelete(id);
    if (deletesigned) {
      res.send("successfully deleted");
      console.log(deletesigned);
    } else {
      res.status(404).send("user deletion failed");
    }
  } catch (err) {
    res.status(500).send("failed to delete user");
    console.log("user deletion failed", err);
  }
});

exports.updateprofile = expressAsyncHandler(async (req, res) => {
  const userId = req.params.id;

  const { username, email, phonenumber, location,country,pin } = req.body;
  const imagePath = req.file ? req.file.path : null;

  try {
    const existinguser = await signupModel.findOne({ email });
    if (existinguser) {
      return res
        .status(400)
        .json({ invalid: true, message: "email already exists" });
    }

    let toUpdate = await signupModel.findById(userId);
    if (imagePath) {
      toUpdate.images = imagePath;
    }
    toUpdate.username = username;
    toUpdate.email = email;
    toUpdate.phonenumber = phonenumber;
    toUpdate.location = location;
    toUpdate.country= country;
    toUpdate.pin = pin;

    await toUpdate.save();
    const userProfile = {
      id: toUpdate._id,
      username: toUpdate.username,
      email: toUpdate.email,
      phonenumber: toUpdate.phonenumber,
      location: toUpdate.location,
      country:toUpdate.country,
      pin:toUpdate.pin,
      image: toUpdate.images,
    };
    res.json({ message: "updated", userProfile: userProfile, toUpdate });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server  error" });
  }
});
