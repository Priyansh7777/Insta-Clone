import React, { useState } from "react";
import "./SignIn.css";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import { login } from "../../Redux/slices/authenticationSlice";
function SignIn() {
  const dispatch=useDispatch();
  const {loginInfo}=useSelector((store)=>store.auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick=()=>{
    console.log("Logged In");
    console.log(email,password);
    dispatch(login({email,password}))
  }
  console.log(loginInfo);
  return (
    <div id="main">
      <div>
        <img
          src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
          alt="Mobile Image"
          id="signin-image"
        />
      </div>
      <div id="box-signin">
        <div id="box-login">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="Instagram Logo"
            id="instagram-image-icon"
          />
          <div id="input-box">
            <input
               className="inputfield"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Phone number, email or email"
            />
            <input
              className="inputfield mt-1"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              id={
                email != "" && password != ""
                  ? "login-button-active"
                  : "login-button"
              }
              onClick={()=>handleClick()}
            >
              Log In
            </button>
          </div>
          <p style={{ display: "flex", marginTop: "1em" }}>
            <hr id="line" />
            <span id="or-value">OR</span>
            <hr id="line" />
          </p>
          <div>
            <p  className="text-align-center" style={{ color: "#385185", cursor: "pointer" }}>
              <FacebookIcon />
              Login in with Facebook
            </p>
            <p className="text-align-center"
              style={{
                marginTop: "2em",
                fontSize: "0.9em",
                color: "rgba(var(--fe0,0,55,107),1)",
                cursor: "pointer"
              }}
            >
              Forget Password?
            </p>
          </div>
        </div>
        <div id="box-login1-signin">
          <p>
            Don't Have an account?{" "}
            <span
              id="signup-link"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up
            </span>
          </p>
        </div>
        <div>
          <p style={{textAlign:"center"}}>Get the app.</p>
          <div id="app-flex">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              id="get-app-icon"
              alt="IOS"
            />
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt="Windows"
              id="get-app-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;