
import React, { useState } from "react";
import "../assets/usercss/forgotpassword.css";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import { Button } from "@mui/material";
import axios from "axios";

function forgotpassword() {
  
  const [email, setEmail] = useState("");
  const [input, setinput] = useState("");




  const handleNextClick = async (e) => {


    if(!email){
      setinput('Enter your email')
    }else if(!/\S+@\S+\.\S+/.test(email)){
      setinput("Email is not a valid email")
    }else{
      setinput(null)
      e.preventDefault();
      try {
        axios.post("http://localhost:2000/userroute/sendotp",{email})
        .then((response) => {
          localStorage.setItem("email",response.data.email);
          window.location.href = "/otpverification";
        });
      }catch (error) {
        console.log(error, "error sending OTP");
      }
    };

    }


   

  return (
    <div>
      <div className="forgot-box">
        <h4 className="gradient-text">Find your account </h4>
        <div className="box1">
          <div>
            <SoftInput
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e)=> setEmail(e.target.value)}
            ></SoftInput>
            <p style={{fontSize:"10px" , color:"red" , marginLeft:"14px"}}   >{input}</p>
            <Button style={{ marginTop: "1.7vh" }} onClick={handleNextClick}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forgotpassword;
