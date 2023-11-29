import React from "react";
import Navbar from "./Navbar";
import bannerimg6 from "../assets/img/hero-bg.jpg";
import Footer from "./footer";
import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

function Workoutplan() {
  const [list, Setlist] = useState([]);
  const [hide, sethide] = useState(false);
  const [show, setshow] = useState(false);
  const [profile,setprofile] = useState("");

  useEffect(() => {
    const getDetails = JSON.parse(localStorage.getItem("userProfile")) || {};
    setprofile(getDetails);

    if (localStorage.getItem("userProfile")) {
      setshow(true);
      sethide(false);
    } else {
      setshow(false);
      sethide(true);
    }

    getplan();
  }, []);

  const getplan = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:2000/userroute/getworkoutplanall`);
      const data = await response.data;
      console.log("00000000", data);
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
        style={{ backgroundImage: `url(${bannerimg6})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>workout </h2>
                <div className="breadcrumb-option">
                  <a href="./index.html">
                    <i className="fa fa-home" /> Home
                  </a>
                  <span>Gallery</span>
                </div>
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
                  <Card  style={{height:"70%", width:"70%" ,backgroundColor:"green" }} >
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                       <div style={{height:'20%'}} dangerouslySetInnerHTML={{ __html: item.title.replace('<img','<img style="width: 50%; height: 50%;"') }} />
                      </Typography>
                      <CardActions>
                      <Button size="small">view</Button>
                    </CardActions>
                    </CardContent>
                   
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
              {list.slice(0, 3).map((item) => (
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

export default Workoutplan;
