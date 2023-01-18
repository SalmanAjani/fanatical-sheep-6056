import React from "react";
import { Image } from '@chakra-ui/react'
import logo from "../../../Assets/nimbleCart_logo_rect.jpg"
import { Link } from "react-router-dom";
const Home = () => {
  return <div>Home
<h2>Add this to requird component and delete it from home page</h2>
  <Image src={logo} w={[60,90,90]}/>
  <Link to={"/admin"}>ADMIN</Link>
  </div>;
};

export default Home;
