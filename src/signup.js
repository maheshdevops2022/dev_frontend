import React,{useState} from "react";
import "./signup.css";
import bgImage from "./assets/img/login.png";
import { Link } from "react-router-dom";

function SignUp() {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div
      className="signup-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="signup-card">
        <h2>Dev Infotechs</h2>
        <p className="subtitle">Create your account</p>

        <form className="mt-6">
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUserName(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <input type="tel" placeholder="Enter mobile number" value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

          <button className="signup-btn">Sign Up</button>
        </form>

        <p className="footer-text">
          Already have an account? <Link to="/login"><span>Login</span></Link> 
        </p>
      </div>
    </div>
  );
}

export default SignUp;