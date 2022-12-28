import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div id="box">
        <div id="box-login">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="Instagram Logo"
            id="instagram-image-icon"
          />
          <p id="heading">
            Sign up to see photos and videos from your friends.
          </p>
          <div>
            <p id="facebook-login">
              <FacebookIcon />
              <span style={{ marginTop: "-0.6em" }}>
                {" "}
                Login in with Facebook
              </span>
            </p>
          </div>
          <p style={{ display: "flex", marginTop: "1em" }}>
            <hr id="line" />
            <span id="or-value">OR</span>
            <hr id="line" />
          </p>
          <div id="input-box">
            <input
              className="inputfield"
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number or Email"
            />
            <input
              className="inputfield mt-1"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="FullName"
            />
            <input
              className="inputfield mt-1"
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="UserName"
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
                username != "" && password != "" && fullName && mobile
                  ? "login-button-active"
                  : "login-button"
              }
            >
              Log In
            </button>
          </div>
          <p
            style={{
              marginTop: "2em",
              fontSize: "0.9em",
              color: "rgba(var(--fe0,0,55,107),1)",
              cursor: "pointer",
              textAlign:"center"
            }}
          >
            Forget Password?
          </p>
        </div>
        <div id="box-login1">
          <p>
            Have an account?{" "}
            <span
              id="signup-link"
              onClick={() => {
                navigate("/");
              }}
            >
              Log in
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

export default SignUp;