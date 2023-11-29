import React from "react";
import Navbar from "./Navbar";
import bannert from "../assets/img/hero-bg.jpg";
import Footer from "./footer";
import axios from "axios";
import { useEffect, useState } from "react";
import userProfile from "./userProfile";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Col, Row } from "react-bootstrap";
function trainers() {
  // const { id } = useParams();
  const [list, setList] = useState([]);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState("");

  console.log("aaaaaaaaaaaa", list);

  useEffect(() => {
    getdata();

    const getDetails = JSON.parse(localStorage.getItem("userProfile")) || {};
    setProfile(getDetails);

    if (localStorage.getItem("userProfile")) {
      setShow(true);
      setHide(false);
    } else {
      setShow(false);
      setHide(true);
    }
  }, []);

  const getdata = async () => {
    try {
      const response = await axios.get("http://localhost:2000/userroute/trainersget");
      setList(response.data);

      console.log(response.data);
    } catch (err) {
      console.log(err, "error getting trainers");
    }
  };




  
  const stylerow = {
    marginTop: "10%",
  };

  return (
    <div>
      <Navbar />
      <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${bannert})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Our trainers</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {show && (
        <section className="trainer-section about-trainer spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>TRAINERS</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {list.map((item) => (
                <div className="col-lg-4 col-md-6  " style={stylerow} key={item._id}>
                  <div className="single-trainer-item">
                    <img
                      style={{ height:"35rem"}}
                      src={`http://localhost:2000/${item.image[1]}`}
                      alt
                    />
                    <div className="trainer-text">
                      <h5>{item.firstname}</h5>
                      <span>{item.description}</span>
                      <br />
                      <Button
                        className="primary-btn signup-btn"
                        variant="contained"
                        component={Link}
                        to={`/trainersprofile/${item._id}`}
                      >
                        {" "}
                        view
                      </Button>
                    </div>
                  </div>
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
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>TRAINERS</h2>
                </div>
              </div>
            </div>
            <Row className="row">
              {list.slice(0, 3).map((item) => (
                <div className="col-lg-4 col-md-6 m-7" key={item._id}>
                  <div className="single-trainer-item">
                    <img
                      style={{ maxWidth: "300px", maxHeight: "300px" }}
                      src={`http://localhost:2000/${item.image[1]}`}
                      alt
                    />
                    <div className="trainer-text">
                      <h5>{item.firstname}</h5>
                      <span>{item.description}</span>
                      <br />
                      <Button
                        className="primary-btn signup-btn"
                        component={Link}
                        to={"/signup"}
                        variant="contained"
                      >
                        view more
                      </Button>
                      {/* <div className="trainer-social">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default trainers;
