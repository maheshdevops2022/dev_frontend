import React, {useState} from "react";
import "./login.css";
import bgImage from "./assets/img/login.png";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  }




  return (
    <div className="login-container" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="login-card">
        <h4 className="head">Welcome to Dev Infotechs</h4>
        <p className="subtitle">Login to your account</p>

        <form id={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p className="footer-text">
          Don't have an account? <Link to="/signup"><span>Sign up</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Login;