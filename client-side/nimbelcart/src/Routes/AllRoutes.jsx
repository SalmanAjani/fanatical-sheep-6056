import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Client/pages/Home/Home";
import Products from "../Client/pages/Products/Products";
import ProductDetails from "../Client/pages/Products/ProductDetails";
import Cart from "../Client/pages/cart/cart";

// Routes for addmin---------------------------------------------------------------->
import AdminPage from "../Admin/Pages/AdminPage";
import AdminAddProduct from "../Admin/Pages/AdminAddProduct";
import { Editproduct } from "../Admin/components/Sidebar/Editproduct";
import { GoogleCalender } from "../Admin/components/Sidebar/GoogleCalender";
import FAQPage from "../Admin/Pages/FAQPage";

// ===================================================================================

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/ProductDetails" element={<ProductDetails />}></Route>
      <Route path="/menproduct" element={<Products category="Mens" />} />
      <Route path="/womenproduct" element={<Products category="Womens" />} />
      <Route path="/kidproduct" element={<Products category="Kids" />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/addproduct" element={<AdminAddProduct />} />
      <Route path="/admin/calender" element={<GoogleCalender />} />
      <Route path="/admin/frequentlyaskedquestion" element={<FAQPage />} />
      <Route path="/:displayid/:id/:title/edit" element={<Editproduct />} />
    </Routes>
  );
};
