
const asyncHandler = require("express-async-handler");
const Subscriptionmodel = require("../model/subscriptionmodel")
const subpackageModel = require("../model/subpackagemodel")
// create
exports.CreateSubscription = asyncHandler(async(req,res)=>{
    console.log("Create subscription successfully")

    const { membershiptype,duration,monthlyfee,onetimeentrollmentfee,additionalbenefits} = req.body;
    try{
        const subData = await  Subscriptionmodel.create({
            membershiptype:membershiptype,
            duration:duration,
            monthlyfee:monthlyfee,
            onetimeentrollmentfee:onetimeentrollmentfee,
            additionalbenefits:additionalbenefits,
            
        })
        console.log(subData)
        res.json(subData)
    }catch(err){
        console.log(err)

    }
})

// getdata
exports.getsubscription = asyncHandler(async(req,res)=>{
    console.log("getsubscription called")
    try{
        const data = await Subscriptionmodel.find()
        res.json(data);
    }catch(err){
        res.status(500).send("failed to get subscription items");
        console.log("failed to get subscription items",err);
 }
})

// deletedata
exports.deleteSubscription = asyncHandler(async(req,res)=>{
    console.log("deletesubscription called");
    const id = req.params.id;
    try{
        const subsDelete = await Subscriptionmodel.findByIdAndDelete(id);
        if(subsDelete){
            res.send(" deleted subscription")
            console.log(subsDelete);

        } else {
            res.status(404).send("subs not found");
          }
    }catch(err){
        res.status(500).send("failed to delete subscription");
        console.log("Failed to delete subs", err);
    }

});

// editdata 

exports.subsEdit = asyncHandler(async(req,res )=>{
    const {id} = req.params;
    console.log("subsEdit called");
    console.log(id);
  try{
    const editId = await Subscriptionmodel.findById(id);
    if (!editId) {
        return res.status(404).json({ error: "not found" });
      }
      res.json(editId);
  }catch(err){
    console.log("Error", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// updatedata

// exports.subsUpdate = asyncHandler(async(req,res)=>{
//     console.log("subscriptions plan updates");
//     const  {id} = req.params;
//     const { membershiptype,duration,monthlyfee,onetimeentrollmentfee,additionalbenefits} = req.body;
//     try{
//         const updateElement = await Subscriptionmodel.findByIdAndUpdate(
//             id,
//             { membershiptype,duration,monthlyfee,onetimeentrollmentfee,additionalbenefits},
//             { new: true }
//         )

//         if (updateElement) {
//             res.send("successfully updated");
//           } else {
//             res.status(404).send("form not found");
//           }
      
//     }catch (error) {
//         res.status(500).send("Failed to update form");
//         console.log("Failed to update form", error);
//       }
// });

exports.subsUpdate = asyncHandler(async(req,res) => {
    const updateID = req.params.id;
    console.log(updateID);
    const{ membershiptype,duration,monthlyfee,onetimeentrollmentfee,additionalbenefits} =req.body;
    console.log(membershiptype,duration,monthlyfee,onetimeentrollmentfee,additionalbenefits);
    console.log(req.body.membershiptype);
    try{
        let toUpdate = await Subscriptionmodel.findById(updateID);
        toUpdate.membershiptype= membershiptype;
        toUpdate.duration= duration;
        toUpdate.monthlyfee= monthlyfee;
        toUpdate.onetimeentrollmentfee= onetimeentrollmentfee;
        toUpdate.additionalbenefits= additionalbenefits;

        let toSave = await toUpdate.save();
        res.json(toSave);
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      }
});
