import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import myspbgimg from "../assets/img/pexels-rdne-stock-project-7187878.jpg";
import Button from "@mui/material/Button";

import Card from "react-bootstrap/Card";
import { Link, json, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Pin } from "@mui/icons-material";

function mysubscription() {
  const navigate = useNavigate("");

  const [profile, setprofile] = useState("");

  const [id, setid] = useState("");
  const [list, setlist] = useState([]);
  const [packagelist, setpackagelist] = useState([]);

  console.log(packagelist,"my package list");
  console.log(list, "kkkk");

  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem("userProfile")) || {};
    setprofile(getdata);
    setid(getdata.id);
    Subscription(id);
    packageGet();
  }, [id]);

  const Subscription = async (id) => {
    try {
      const response = await axios.get(`http://localhost:2000/userroute/mysubscriptionList/${id}`);
      setlist(response.data);
      console.log(response.data, "hellelelel");
    } catch (error) {
      console.log(error);
    }
  };

  const packageGet = async () => {
    try {
      const response = await axios.get("http://localhost:2000/userroute/subpacakge");
      setpackagelist(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const stateID = (pkid) => {
    try {
      const state = {
        id,
        pkid,
      };
    
      navigate(`/subscribepackage/${pkid}`,{state});
    } catch (err) {
      console.log(err);
    }
  };
  

  const stateID2 = (pkid2)=>{
    try{
      const state = {
        pkid2
      };
      navigate("/subscribe",{state});
    }catch(error){
      console.log(error)
    }
  }



  return (
    <div>
      <Navbar />
      <section
        className="breadcrumb-section set-bg"
        style={{ backgroundImage: `url(${myspbgimg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>My subscription</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trainer-section about-trainer spad">
        <div className="container">
          <div className="row">
            <div className=" col-sm-2 col-md-4 col-lg-12">
              <Table responsive="xs" style={{ border: "red" }}>
                <thead>
                  <tr>
                    <th>No:</th>
                    <th>Memmbership Type</th>
                    <th>Duration</th>
                    <th>Monthly Fee</th>
                    <th>OTEF</th>
                    <th>Total Paid</th>
                    <th>Expire Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* <tbody>
                  {list.map((item, index) => (
                    
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {packagelist.find((listItem) => listItem._id === item.packageId)
                          ?.membershiptype}
                      </td>
                      <td>
                        {packagelist.find((listItem) => listItem._id === item.packageId)
                          ?.duration}
                      </td>
                      <td>
                        {packagelist.find((listItem) => listItem._id === item.packageId)
                          ?.monthlyfee}
                      </td>
                      <td>
                        {packagelist.find((listItem) => listItem._id === item.packageId)
                          ?.onetimeentrollmentfee}
                      </td>
                      <td>
                        {item.totalpaid}
                      </td>
                      <td>
                      {new Date(item.expiry_date).toLocaleDateString()}
                      </td>
                      <td><Button>View</Button></td>
                    </tr>
                  ))}
                </tbody> */}

                <tbody>
                  {list.map((item, index) => {
                    const packageItem = packagelist.find(
                      (listItem) => listItem._id === item.packageId
                    );
                    const anySubscriptionExpired = list.every(
                      (item) => new Date(item.expiry_date) < new Date()
                    );
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{packageItem?.membershiptype}</td>
                        <td>{packageItem?.duration}</td>
                        <td>{packageItem?.monthlyfee}</td>
                        <td>{packageItem?.onetimeentrollmentfee}</td>
                        <td>{item.totalpaid}</td>
                        <td>{new Date(item.expiry_date).toLocaleDateString()}</td>
                        {/* Render buttons based on subscription status */}
                        <td>
                          {anySubscriptionExpired ? (
                            <Button
                             onClick={() => stateID(item.packageId)}
                             >
                              Renew
                            </Button>
                          ) : (
                            <Button component={Link} to={`/membershipview/${item._id}`}>View</Button>
                          )}
                          <Button onClick={()=>stateID2(item.packageId)}>Upgrade</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default mysubscription;
