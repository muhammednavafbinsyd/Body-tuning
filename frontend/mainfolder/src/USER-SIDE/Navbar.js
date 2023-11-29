import React, { useEffect, useState } from "react";
import "../assets/usercss/style.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import logoimage from "../assets/img/Web_capture_1-11-2023_94336_-removebg.png"
import Button from 'react-bootstrap/Button';
// import "../assets/usercss/style.css"
import SoftBox from "components/SoftBox";

function Navbar() {
  const [signupHide, setsignUphide] = useState(false);
  const [nameShow, setNameShow] = useState(false);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const getName = JSON.parse(localStorage.getItem("userProfile")) || {};
    setProfile(getName);

    if (localStorage.getItem("userProfile")) {
      setNameShow(true);
      setsignUphide(false);
    }else{
      setNameShow(false);
      setsignUphide(true);
    }
  }, []);

  function Logout() {
    localStorage.removeItem("userProfile");
    window.location.href = "/home";
  }
  return (
    <div>
      {/* Header Section Begin */}
      <header className="header-section">
        <div className="container">
          <div className="logo">
            <a href="/home">
              <img style={{width:"4rem"}} src={logoimage} ></img>
            </a>
          </div>
          <div className="nav-menu"> 
            <nav className="mainmenu mobile-menu">
              <ul>
                <li className="active">
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                {/* <li>
                  <a href="/classes">Classes</a>
                </li> */}
                  <li>
                  <a href="/trainersfront">Trainers</a>
                </li>
                <li>
                  <a href="/workoutfront">Workout</a>
                </li>
                <li>
                  <a href="/dietfront">Diet</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
                <li>
                  <a href="/contact">Contacts</a>
                </li>
              </ul>
            </nav>
            {nameShow && (
              // <a className="primary-btn signup-btn">{profile.username} </a>
              <>
                {[profile.username].map((variant) => (
                  <>
                    <img 
                      style={{ width: "5vh", borderRadius: "2vh", }}
                      src={`http://localhost:2000/${profile.image}`}
                    />

                    <DropdownButton
                      className="primary-btn signup-btn "
                      as={ButtonGroup}
                      key={variant}
                      id={`variant-${variant}`}
                      variant="none"
                      title={variant}
                      style={{ border: "none",marginRight:"1rem" }}
                      

                      // src={`http://localhost:2000/${profile.image}`}
                    >
                      <Dropdown.Item>
                        <SoftTypography component={Link} to={"/userprofile"}>
                          Profile
                        </SoftTypography>
                      </Dropdown.Item>
                    
                      <Dropdown.Item>
                        <SoftTypography component={Link} to={"/mysubscription"} >
                          My subscription
                        </SoftTypography>
                        </Dropdown.Item>
                      <Dropdown.Item>
                        <SoftTypography component={Link} to={"/changepasscode"}>
                          Change Password
                        </SoftTypography>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={Logout}>
                        <SoftTypography>Log out</SoftTypography>
                      </Dropdown.Item>
                    </DropdownButton  >
                    <SoftBox component={Link} to={"/subscribe"} >
                    <Button variant="secondary">Subscribe</Button>
                    </SoftBox>
                  </>
                ))}
              </>
            )}
            {signupHide && (
               <>
              <a href="/login" className="primary-btn signup-btn">
                Login
              </a>
             
              <SoftBox component={Link} to={"/subscribe"} >
              <Button variant="secondary">Subscribe</Button>
              </SoftBox>
              </>
            )}
          </div>
          <div id="mobile-menu-wrap" />
        </div>
       
      </header>
    </div>
  );
}

export default Navbar;
