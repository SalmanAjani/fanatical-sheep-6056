import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import loginIng from "./login.jpg";
import { authLogin } from "../../../redux/auth/action";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
      if (formData.password.trim().length < 4) {
        alert("Password must be at least of 4 characters");
      } else {
        dispatch(authLogin(formData));
      }
    } else {
      alert("Please enter all required fields");
    }
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginImage">
          <img src={loginIng} alt="" />
        </div>
        <div className="loginDetail">
          <div>
            <h3>Login</h3>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                type="email"
                placeholder="Enter email"
              />
              <input
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                type="password"
                placeholder="Set a password"
              />
              <p>
                New User ? <Link to="/signup">Signup .</Link>
              </p>
              <button type="submit">CONTINUE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
