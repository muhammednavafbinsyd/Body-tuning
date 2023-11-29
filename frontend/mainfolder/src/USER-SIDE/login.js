import React, { useState } from "react";
import "../assets/usercss/signup.css";
import axios from "axios";
import bglogin from "../assets/img/banner-bg.jpg";

function login() {
  const [input1, setinput1] = useState("");
  const [input2, setinput2] = useState("");
  const [invalid, setinvalid] = useState("");

  function Login() {
    if (input1 === "" && input2 === "") {
      setinvalid("Enter email or password");
    } else {
      const userdata = {
        input1: input1,
        input2: input2,
      };
      axios
        .post("http://localhost:2000/userroute/login", userdata)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userProfile", JSON.stringify(response.data.user));
          }
          console.log(response.data);
          window.location.href = "/home";
          alert("successfully logged in");
        })
        .catch((err) => {
          console.log(err);
          alert("failed to login");
          setinvalid("inavalid email or password");
        });
    }
  }

  return (
    <div className="main_sec" style={{ backgroundImage: `url(${bglogin})` }}>

        <div className="container__child signup__form">
          {invalid && <p style={{ color: "red" }}>{invalid}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setinput1(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setinput2(e.target.value)}
            />
          </div>
          <div className="m-t-lg">
            <ul className="list-inline">
              <li>
                <input
                  className="btn btn--form"
                  type="submit"
                  defaultValue="Register"
                  onClick={Login}
                />
              </li>

              <a className="signup__link" href="/forgotpassword">
                <a className="signup__link." href="/signup">
                  create account?{" "}
                </a>
                Forgot Password
              </a>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default login;
