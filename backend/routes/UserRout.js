const express = require("express");
const UserToken = require("../middleware/userToken");
const Router = express.Router();
const signupController = require("../controller/signupcontroller");
const passwordotpController = require("../controller/changepassword");
const multer = require("multer");
const trainersController = require("../controller/trainerscontroller");
const workoutcontroller = require("../controller/workoutcontroller");
const dietcontroller = require("../controller/dietplancontroller");
const ServicesController = require("../controller/servicescontroller");
const TestimonialsController = require("../controller/testimonialcontroller");
const SubscribeController = require("../controller/subscriptioncontroller");
const subpackagecontroller = require("../controller/subpackagecontroller");
const Subscriptionmanage = require("../model/subscriptionmodel");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

//signup/crud
Router.post("/signup", UserToken, signupController.signupform);
Router.get("/getUsers", UserToken, signupController.Getusers);
Router.post("/login", signupController.login);
Router.delete("/userdeletion/:id", signupController.userDelete);
Router.get("/userprofileEdit/:id", signupController.editprofile);
Router.put(
  "/userprofileUpdate/:id",
  upload.single("image"),
  signupController.updateprofile
);

//change password/Otp
Router.post(
  "/changepassword/:id",
  UserToken,
  passwordotpController.changepassword
);
Router.post("/sendotp", passwordotpController.otpsend);
Router.post("/verifyotp", passwordotpController.otpverify);
Router.post("/newpassword", passwordotpController.setnewpassword);

//trainers

Router.get("/trainersget", trainersController.trainersGet);
Router.get("/tarinersedit/:id", trainersController.trainersEdit);

//workouts

Router.get("/workoutplanget/:id", workoutcontroller.getworkoutplan);
Router.get("/getworkoutplanall", workoutcontroller.getworkoutplanall);

//Diets

Router.get("/dietplanget/:id", dietcontroller.getdietplan);
Router.get("/getdietplanall", dietcontroller.getdietplanall);

//services
Router.get("/services", ServicesController.serviceGet);

//Trainers Status

Router.get("/statusOnly", trainersController.onlyStatus);

// Testimonials
Router.get("/testimonialList", TestimonialsController.getTestimonial);

// Subscribe
Router.get("/subscribeList",SubscribeController.getsubscription);

// subscribepackage 
Router.get("/subpacakge/:id",SubscribeController.subsEdit)


// packageId 
Router.get("/packageIdget/:id",subpackagecontroller.forpackageid)

// my subscription list 

Router.get("/mysubscriptionList/:id",subpackagecontroller.listuserallplan)

// 
Router.get("/subpacakge/",SubscribeController.getsubscription)

// getrenewDta
Router.get("/renewdata/:id",subpackagecontroller.getrenewdata)


//Membership
Router.get("/membership",SubscribeController.getsubscription)

//upgrade  
Router.get("/upgrade/:id",SubscribeController.subsEdit)

module.exports = Router;
