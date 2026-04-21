import React, {useState} from "react";
import "./login.css";
import bgImage from "./assets/img/login.png";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password:""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login",
        form
      )

      console.log(res.data);

      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));

        alert("Login success");

        window.location.href = "/contact-us";
      }
       
    } catch(err){
      alert(err.response?.data?.message || "Login Failed");
    }
  }




  return (
    <div className="login-container" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="login-card">
        <h4 className="head">Welcome to Dev Infotechs</h4>
        <p className="subtitle">Login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange}/>
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" name="email" placeholder="Enter your password" onChange={handleChange}/>
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