import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, json, useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import sbp from "../assets/img/pexels-victor-freitas-703014.jpg";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import SoftBox from "components/SoftBox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SoftInput from "components/SoftInput";
import { Label } from "@mui/icons-material";

function subscribepakage() {
  const { id } = useParams();

  const [userProfile, setuserprofile] = useState("");
  const [open, setopen] = useState(false);
  const [open400, setopen400] = useState(false);
  const [show400, setshow400] = useState(false);





  const [pkid, setpkid] = useState("");

  const [upgradeId,setupgradeID] = useState("");

  const location = useLocation();
  const state = location.state;

  const { pkid2 } = state || {};
  console.log(pkid2, "received pid");

  console.log(state,"11111111111")

 
  console.log(pkid,"pkid")

  console.log(upgradeId,'pid')

  const handleClickOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
    window.location.href = "/mysubscription";
  };
  const [onshow, setOnshow] = useState(false);

  const [onshow2, setOnshow2] = useState(false);

  const [onhide, setonhide] = useState(true);

  // const [renewShow, setrenewShow] = useState(true);

  const getdetails = () => {
    setOnshow(true);
    setOnshow2(false);
    setonhide(false);
  };

  // const [renwdetails, setrenewdetails] = useState({
  //   username: "",
  //   phonenumber: "",
  //   email: "",
  //   pin: "",
  //   location: "",
  //   country: "",
  //   duration: "",
  //   monthlyfee: "",
  //   onetimeentrollmentfee: "",
  //   totalpaid: "",
  // });

  // const renewData = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:2000/userroute/renewdata/${id}`);
  //     console.log(response.data);
  //     setrenewdetails(response.data);
  //     setonhide(false);
  //     setOnshow2(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const [subpackage, setsubpackage] = useState({
    membershiptype: "  ",
    duration: "",
    monthlyfee: "  ",
    onetimeentrollmentfee: "  ",
    additionalbenefits: "",
  });

  const [duration, setDuration] = useState("");
  const [monthlyfee, setmonthlyfee] = useState("");
  const [onetimeentrollmentfee, setonetimerollmentfee] = useState("");

  const myGeeks = (durations, monthlyfees, onetimeentrollmentfees) => {
    const str = durations;
    const str2 = monthlyfees;
    const str3 = onetimeentrollmentfees;

    let matches = str.replace(/[^0-9]/g, "");
    let matches2 = str2.replace(/[^0-9]/g, "");
    let matches3 = str3.replace(/[^0-9]/g, "");

    if (matches && matches2) {
      setDuration(matches);
      setmonthlyfee(matches2);
      setonetimerollmentfee(matches3);
    }
  };

  useEffect(() => {
    if (state) {
      setpkid(state.pkid);
      setOnshow(true);
      setupgradeID(state.pkid2)
      // setonhide(false);
    } else {
      console.log("Error");
    }
    // renewData();
    subpacakgedata();
    const getinfo = JSON.parse(localStorage.getItem("userProfile")) || {};
    setuserprofile(getinfo);
    myGeeks(subpackage.duration, subpackage.monthlyfee, subpackage.onetimeentrollmentfee);
  }, [id, subpackage.duration, subpackage.monthlyfee, subpackage.onetimeentrollmentfee]);

  

  const subpacakgedata = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/userroute/subpacakge/${id}`);
      setsubpackage(response.data);
      console.log("00000", response.data);
      // setonhide(true);
      setOnshow2(false);
    } catch (error) {
      console.log(error);
    }
  };

  const Apply = () => {
    const formdata = {
      packageId: id,
      userID: userProfile.id,
      username: userProfile.username,
      phonenumber: userProfile.phonenumber,
      email: userProfile.email,
      pin: userProfile.pin,
      location: userProfile.location,
      country: userProfile.country,
      duration: subpackage.duration,
      monthlyfee: subpackage.monthlyfee,
      onetimeentrollmentfee: subpackage.onetimeentrollmentfee,
      totalpaid: parseInt(duration * monthlyfee) + parseInt(onetimeentrollmentfee),
    };
    console.log(formdata, "subpackage formdata");
    axios
      .post("http://localhost:2000/adminroute/packageBill",formdata)
      .then((response) => {
        console.log(response.data);
        setOnshow(false);
        setopen(true);
        setopen400(false);
        setshow400(false);
      })

      .catch((error) => {
        console.log(error);
        if (error.response.status === 400) {
          setopen400(true);
          setshow400(true);
          setopen(false);
        }
      });
  };

  if (!localStorage.getItem("userProfile")) {
    window.location.href = "/login";
  }

  return (
    <div>
      <Navbar />
      <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${sbp})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>your package</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trainer-section about-trainer spad">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <div className="col-lg-4 col-md-4">
              {onhide && (
              <Card style={{ width: "30rem" }}>
                <Card.Body style={{ margin: "3rem" }}>
                  <div style={{ display: "grid", justifyContent: "center", alignItems: "center" }}>
                    <Card.Title>Package</Card.Title>
                    <Card.Text style={{ width: "20em" }}>
                      <h3>{subpackage.membershiptype}</h3>
                      <h5>{subpackage.duration}</h5>
                      <h5>Monthlyfee{subpackage.monthlyfee}</h5>
                      <h5>One time entrollmentfee{subpackage.onetimeentrollmentfee}</h5>
                    </Card.Text>
                    {pkid && pkid.length > 1 ? (
                      <></>
                    ) : (
                      
                      <Button className="primary-btn" variant="primary"  onClick={getdetails}>
                        Subscribe
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
                )}
            </div>
            <div className="col-lg-8 col-md-8">
              {onshow && (
                <Card style={{ width: "40rem", margin: "10% 16% 16% 16%" }}>
                  <Card.Body style={{ margin: "3rem" }}>
                    <div
                      style={{ display: "grid", justifyContent: "center", alignItems: "center" }}
                    >
                      <Card.Title mb={20}>Subscription details</Card.Title>
                      <Card.Text style={{ width: "20em" }}>
                        <label>Your billing details</label>
                        <SoftBox>
                          <h5>{userProfile.username}</h5>
                          <h5>{userProfile.phonenumber}</h5>
                          <h5>{userProfile.email}</h5>
                          <h5>{userProfile.pin}</h5>
                          <h5>{userProfile.location}</h5>
                          <h5>{userProfile.country}</h5>
                          <br />
                        </SoftBox>
                        <div style={{ display: "grid" }}>
                          <SoftBox>
                            <p>{subpackage.duration}</p>
                            <p>
                              <span>Monthlee fee</span>
                              {subpackage.monthlyfee}
                            </p>
                            <p>
                              <span>One time entrollmentfee</span>
                              {subpackage.onetimeentrollmentfee}
                            </p>
                          </SoftBox>
                          <SoftBox>
                            {/* <h5>Totel paid:{duration * subpackage.monthlyfee + subpackage.onetimeentrollmentfee}</h5> */}

                            <h5>
                              Total paid:{" "}
                              {parseInt(duration * monthlyfee) + parseInt(onetimeentrollmentfee)}
                            </h5>
                          </SoftBox>

                          <SoftBox>
                            {pkid && pkid.length > 1 ? (
                              <button className="primary-btn" onClick={Apply}>
                                Renew
                              </button>
                            ) : (
                              <button className="primary-btn" onClick={Apply}>
                                Apply
                              </button>
                            )}
                          </SoftBox>
                        </div>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              )}
              <>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title"></DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Your applied sucessfully {subpackage.membershiptype}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
                {show400 && (
                  <Dialog
                    open={open400}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title"></DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        You have an already in plan
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button component={Link} to={"/subscribe"} autoFocus>
                        Upgrade
                      </Button>
                    </DialogActions>
                  </Dialog>
                )}
              </>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default subscribepakage;
