import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import BannerImg from "../assets/img/hero-bg.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import "../assets/usercss/style.css";
import { useParams } from "react-router-dom";
import { NavItem } from "react-bootstrap";

function Trainersprofile() {
  const { id } = useParams();

  const [data, setdata] = useState({
    image: [],
    firstname: "",
    lastname: "",
    email: "",
    description: "",
  });

  const [workoutdata, setworkoutdata] = useState([
    {
      title: "",
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
      day6: "",
      day7: "",
    },
  ]);

  const [dietdata, setdietdata] = useState([
    {
      title: "",
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
      day6: "",
      day7: "",
    },
  ]);

  useEffect(() => {
    getprofile(id);
    getworkoutplan(id);
    getdietplan(id);
  }, [id]);

  // const getworkoutplan = (id) =>{
  //   try{
  //   const response = await axios.get(`http://localhost:2000/userroute/workoutplanget/${id}`);    console.log(response.data);
  //     setworkoutdata(response.data);
  //   }catch(err){
  //   console.log(err,"cannot get workoutplan ")
  //   }
  // }

  const getworkoutplan = async (id) => {
    try {
      const response = await axios.get(`http://localhost:2000/userroute/workoutplanget/${id}`);
      console.log("11111111111111", response.data);
      setworkoutdata(response.data);
    } catch (err) {
      console.log(err, "cannot get workoutplan ");
    }
  };

  const getdietplan = async (id) => {
    try {
      const response = await axios.get(`http://localhost:2000/userroute/dietplanget/${id}`);
      console.log(response.data);
      setdietdata(response.data);
    } catch (err) {
      console.log(err, "cannot get dietplan ");
    }
  };

  const getprofile = async (id) => {
    try {
      const response = await axios.get(`http://localhost:2000/userroute/tarinersedit/${id}`);
      console.log(response.data);
      setdata(response.data);
    } catch (err) {
      console.log(err, "cannot get ");
    }
  };

  return (
    <div>
      <Navbar />
      <section
        className="breadcrumb-section set-bg"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Profile</h2>
                {/* <div className="breadcrumb-option">
              <a href="./index.html"><i className="fa fa-home" /> Home</a>
              <span>Gallery</span>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trainer-section about-trainer spad ">
        <div className="container">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="profile" title="Profile">
              <div className="pro-file">
                <div style={{ width: "30rem" }}>
                  <h2>{data.firstname}</h2>
                  <p>{data.description}</p>
                  <p>{data.email}</p>
                </div>
                <img className="prof-file-img" src={`http://localhost:2000/${data.image[0]}`}></img>
              </div>
            </Tab>
            <Tab eventKey="home" title="Workout plan">
              Tab content for Home
              {workoutdata.map((item, index) => (
                <div key={index}>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.title.replace(/<img[^>]*>/g, "") }}
                  ></div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<style>li {list-style-type: none; }</style>${item.day1}`,
                    }}
                  ></div>
                  <p>{workoutdata.title}</p>
                </div>
              ))}
            </Tab>
            <Tab eventKey="contact" title="Diet plan">
              Tab content for Contact
              {dietdata.map((item, index) => (
                <div key={index}>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.title.replace(/<img[^>]*>/g, "") }}
                  ></div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<style>li { list-style-type: none; }</style>${item.day1}`,
                    }}
                  ></div>
                  <p>{workoutdata.title}</p>
                </div>
              ))}
            </Tab>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Trainersprofile;
