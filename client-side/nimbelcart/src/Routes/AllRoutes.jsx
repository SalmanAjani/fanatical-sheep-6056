import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Client/pages/Home/Home";
import Products from "../Client/pages/Products/Products";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>
  );
};
