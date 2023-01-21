import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import loginIng from "./login.jpg";
import { authLogin } from "../../../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { getData } from "../../../redux/bag/actions";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const toast = useToast();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (authState.userLogin.message === "User does not exist") {
      toast({
        title: "User does not exist",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: "AUTH_LOGIN_RESET" });
    }
    if (authState.userLogin.message === "Password is incorrect") {
      toast({
        title: "Password is incorrect",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: "AUTH_LOGIN_RESET" });
    }
    if (authState.userLogin.message === "Something went wrong") {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: "AUTH_LOGIN_RESET" });
    }
    if (authState.userLogin.message === "Login successful") {
      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: "AUTH_LOGIN_RESET" });
      dispatch(getData());
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [dispatch, navigate, authState, toast]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
      if (formData.password.trim().length < 4) {
        toast({
          title: "Password must be at least of 4 characters",
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        dispatch(authLogin(formData));
      }
    } else {
      toast({
        title: "Please enter all required fields",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
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
