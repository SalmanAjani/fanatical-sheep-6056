import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Client/pages/Home/Home";
import Products from "../Client/pages/Products/Products";
import AdminPage from "../Admin/Pages/AdminPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/admin" element={<AdminPage/>}/>
    </Routes>
  );
};
