const asyncHandler = require("express-async-handler");
const packageModel = require("../model/subpackagemodel");

// exports.userspacakge = asyncHandler(async (req, res) => {
//   const {
//     packageId,
//     userID,
//     username,
//     phonenumber,
//     email,
//     pin,
//     location,
//     country,
//     duration,
//     monthlyfee,
//     onetimeentrollmentfee,
//     totalpaid,
//   } = req.body;

//   try {

//     const durationInMonths = parseInt(duration, 10);

//     const expirationDate = new Date();
//     expirationDate.setMonth(expirationDate.getMonth() + durationInMonths);

//     const packagedata = await packageModel.create({
//       expiry_date: expirationDate,
//       packageId: packageId,
//       userID: userID,
//       username: username,
//       phonenumber: phonenumber,
//       email: email,
//       pin: pin,
//       location: location,
//       country: country,
//       duration: durationInMonths, // Storing duration as months only
//       monthlyfee: monthlyfee,
//       onetimeentrollmentfee: onetimeentrollmentfee,
//       totalpaid: totalpaid,
//     });

//     res.json(packagedata);
//   } catch (err) {
//     console.log(err);
//   }
// });

exports.userspacakge = asyncHandler(async (req, res) => {
  const {
    packageId,
    userID,
    username,
    phonenumber,
    email,
    pin,
    location,
    country,
    duration,
    monthlyfee,
    onetimeentrollmentfee,
    previous,
    totalpaid,
  } = req.body;

  try {
    const durationInMonths = parseInt(duration, 10);

  const expirationDate = new Date();
     expirationDate.setMonth(expirationDate.getMonth() + durationInMonths);

    // const expirationDate = new Date();
    // expirationDate.setSeconds(expirationDate.getSeconds() + 60);

    const existingPackage = await packageModel.findOne({
      userID: userID,
      expiry_date: { $gt: new Date() },
    });

    if (existingPackage) {
      res.status(400).json({ message: "You already have an active package." });
    } else {
      // Create a new package since there's no active package
      const packagedata = await packageModel.create({
        expiry_date: expirationDate,
        packageId: packageId,
        userID: userID,
        username: username,
        phonenumber: phonenumber,
        email: email,
        pin: pin,
        location: location,
        country: country,
        duration: durationInMonths,
        monthlyfee: monthlyfee,
        onetimeentrollmentfee: onetimeentrollmentfee,
        totalpaid: totalpaid,
      });
      res.json(packagedata);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

exports.getrenewdata = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const renewData = await packageModel.findById(id);
    res.json(renewData);
  } catch (error) {
    console.log(error);
  }
});

exports.subscribedusers = asyncHandler(async (req, res) => {
  try {
    const subscibedlist = await packageModel.find();
    res.json(subscibedlist);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "internal server error" });
  }
});

// for

exports.forViewpackages = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const data = await packageModel.findById(id);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// for userprofile recent subscrption plan

exports.forpackageid = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const data = await packageModel
      .findOne({ userID: id })
      .sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Package not found" });
  }
});

// for mysubscription  list user all plan

exports.listuserallplan = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const data = await packageModel.find({ userID: id });

    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// exports.userspacakgeRenew =asyncHandler(async(req,res)=>{

//   const{ id} = req.params
//   console.log(id)

//   const renewData = await packageModel.
// })
