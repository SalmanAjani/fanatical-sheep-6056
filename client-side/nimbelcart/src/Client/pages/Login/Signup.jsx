import React, { useEffect, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import signupimg from "./signup.png";
import { registerUser } from "../../../redux/auth/action";
import { useToast } from "@chakra-ui/react";
import { getData } from "../../../redux/bag/actions";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (authState.userRegister.message === "User already exists") {
      toast({
        title: "User already exists, Please Login",
        status: "info",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: "AUTH_LOGIN_RESET" });
    }
    if (authState.userRegister.message === "user registered successfully") {
      toast({
        title: "user registered successfully",
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

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      if (
        formData.name.trim().length < 4 ||
        formData.password.trim().length < 4
      ) {
        toast({
          title: "Name and password must be at least of 4 characters",
          status: "info",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      } else {
        dispatch(registerUser(formData));
      }
    } else {
      toast({
        title: "Please enter all required fields",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <div className="signup">
      <div className="signupContainer">
        <div className="signupImage">
          <img src={signupimg} alt="" />
        </div>
        <div className="signupDetail">
          <div>
            <h3>Signup</h3>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                type="text"
                placeholder="Full name"
              />
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
                Already a User ? <Link to="/login">Login .</Link>
              </p>
              <button type="submit">CONTINUE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
