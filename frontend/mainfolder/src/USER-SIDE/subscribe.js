import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "../assets/usercss/style.css";
import bgimg from "../assets/img/pexels-victor-freitas-2261477.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, json, useLocation, useNavigate, useParams } from "react-router-dom";
import userProfile from "./userProfile";
import { Upgrade } from "@mui/icons-material";

function subscribe() {
  const navigate = useNavigate();
  const [list, setlist] = useState([]);
  const [upgradelist, setupgradelist] = useState([]);

  const [packagelist, setpackagelist] = useState([]);

  const [onhide, setohide] = useState(true);
  const [onhide2, setonhide2] = useState(true);

  const [pid, setpid] = useState("");

  const location = useLocation();

  const state = location.state;

  console.log(upgradelist, "dfgs");

  const [profile, setprofile] = useState("userProfile");

  const getinfo = JSON.parse(localStorage.getItem("userProfile")) || {};
  // setprofile(getinfo);

  useEffect(() => {
    if (state) {
      setohide(false);
      setpid(state.pkid2);
      console.log(state.pkid2, "000000000000000000000");
    } else {
      setonhide2(false);
      // setpackagelist(null);
      console.log("error");
    }
    subscribeList();
    subscribedusers(pid);
  }, [pid]);

  useEffect(() => {
    if (packagelist && upgradelist.length > 0) {
      const filteredList = upgradelist.filter((item) => {
        const packageDuration = parseInt(packagelist.duration);
        const listDuration = parseInt(item.duration);

        return packageDuration < listDuration;
      });
      setupgradelist(filteredList, upgradelist);
    }
  }, [packagelist]);

  const subscribeList = async () => {
    try {
      const response = await axios.get("http://localhost:2000/userroute/subscribeList");
      setlist(response.data);
      setupgradelist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const subscribedusers = async (pid) => {
    console.log("4444444444444", pid);
    try {
      const response = await axios.get(`http://localhost:2000/userroute/upgrade/${pid}`);
      setpackagelist(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state, "2212121212212121");

  function subscribe() {
    if (!localStorage.getItem("userProfile")) {
      window.location.href = "/login";
    }
  }

  const Upgrade = (pid) => {
    try {
      const state = {
        id,
        pid,
      };
      navigate(`/subscribepackage/${pid}`, { state });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Add Your Plan Today</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trainer-section about-trainer spad">
        <div className="container">
          {onhide && (
            <div className="row">
              {list.map((item) => (
                <div className="col-lg-4 col-md-6" key={item}>
                  <Card style={{ height: "25rem", margin: "10px" }}>
                    <CardContent style={{ margin: "30px" }}>
                      <div>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.membershiptype}
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                          {item.duration}
                        </Typography>
                      </div>
                      <div>
                        <Typography gutterBottom variant="p" component="div">
                          <p>
                            <span style={{ color: "black" }}>Monthlyfee</span>
                            {item.monthlyfee}{" "}
                          </p>
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                          <p>
                            <span style={{ color: "black" }}>One time entrollmentfee</span>
                            {item.onetimeentrollmentfee}
                          </p>
                        </Typography>
                      </div>
                      <div>
                        <Typography gutterBottom variant="p" component="div">
                          {item.additionalbenefits}
                        </Typography>
                      </div>

                      <div>
                        {" "}
                        <Button
                          className="primary-btn"
                          component={Link}
                          to={`/subscribepackage/${item._id}`}
                          onClick={subscribe}
                        >
                          Subscribe
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
          {onhide2 && (
            <div className="row">
              {upgradelist.map((item) => (
                <div className="col-lg-4 col-md-6" key={item._id}>
                  <Card style={{ height: "25rem", margin: "10px" }}>
                    <CardContent style={{ margin: "30px" }}>
                      <div>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.membershiptype}
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                          {item.duration}
                        </Typography>
                      </div>
                      <div>
                        <Typography gutterBottom variant="p" component="div">
                          <p>
                            <span style={{ color: "black" }}>Monthlyfee</span>
                            {item.monthlyfee}{" "}
                          </p>
                        </Typography>
                        <Typography gutterBottom variant="p" component="div">
                          <p>
                            <span style={{ color: "black" }}>One time entrollmentfee</span>
                            {item.onetimeentrollmentfee}
                          </p>
                        </Typography>
                      </div>
                      <div>
                        <Typography gutterBottom variant="p" component="div">
                          {item.additionalbenefits}
                        </Typography>
                      </div>

                      <div>
                        {" "}
                        {/* <Button
                          className="primary-btn"
                          component={Link}
                          to={`/subscribepackage/${item._id}`}
                          onClick={()=>Upgrade(pid)}
                         >
                          Upgrade
                        </Button> */}
                        <Button
                          className="primary-btn"
                          component={Link}
                          to={{
                            pathname: `/subscribepackage/${item._id}`,
                            state: { pkid2: pid },
                          }}
                          onClick={() => Upgrade(pid)}
                        >
                          Upgrade
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default subscribe;
