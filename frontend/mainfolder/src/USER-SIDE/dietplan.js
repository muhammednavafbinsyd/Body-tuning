import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useState, useCallback, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Bannerimg from "../assets/img/hero-bg.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

function Dietplan() {
  const [list, Setlist] = useState([]);
  const [hide, sethide] = useState(false);
  const [show, setshow] = useState(false);
  const [profile, setprofile] = useState("");

  useEffect(() => {
    const getDetails = JSON.parse(localStorage.getItem("userProfile")) || {};
    setprofile(getDetails);

    if (localStorage.getItem("userProfile")) {
      sethide(false);
      setshow(true);
    } else {
      setshow(false);
      sethide(true);
    }

    getplan();
  }, []);

  const getplan = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:2000/userroute/getdietplanall`);
      const data = await response.data;
      console.log(data, "8888888888");
      Setlist(data);
    } catch (error) {
      console.log(error, "get data err plan");
    }
  });

  return (
    <div>
      <Navbar />
      <section
        className="breadcrumb-section set-bg"
        style={{ backgroundImage: `url(${Bannerimg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Diet</h2>
                {/* <div className="breadcrumb-option">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Home
                  </a>
                  <span>Gallery</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {show && (
        <section className="trainer-section about-trainer spad">
          <div className="container">
            <div className="row">
              {list.map((item) => (
                <div className="col-lg-4 col-md-6" key={item._id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <div dangerouslySetInnerHTML={{ __html: item.title }} />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">view</Button>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {hide && (
        <section className="trainer-section about-trainer spad">
          <div className="container">
            <div className="row">
              {list.map((item) => (
                <div className="col-lg-4 col-md-6" key={item._id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <div dangerouslySetInnerHTML={{ __html: item.title }} />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button component={Link} to={"/signup"} size="small">
                        view more
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}

export default Dietplan;
