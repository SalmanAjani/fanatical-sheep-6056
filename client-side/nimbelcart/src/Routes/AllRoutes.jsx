import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Client/pages/Home/Home";
import Products from "../Client/pages/Products/Products";
import ProductDetails from "../Client/pages/Products/ProductDetails";
import Cart from "../Client/pages/cart/cart";
import Signup from "../Client/pages/Login/Signup";
import Login from "../Client/pages/Login/Login";
import MyOrders from "../Client/pages/Home/MyOrders";

// Routes for addmin---------------------------------------------------------------->
import AdminPage from "../Admin/Pages/AdminPage";
import AdminAddProduct from "../Admin/Pages/AdminAddProduct";
import FAQPage from "../Admin/Pages/FAQPage";
import BarChartPage from "../Admin/Pages/BarChartPage";
import { LineChartPage } from "../Admin/Pages/LineChartPage";
import GeoChartpage from "../Admin/Pages/GeoChartpage";
import PieChartPage from "../Admin/Pages/PieChartPage";
import { CalenderPage } from "../Admin/Pages/CalenderPage";
import SupportPage from "../Admin/Pages/SupportPage";
import { Tutorialpage } from "../Admin/Pages/Tutorialpage";
import { ManageProduct } from "../Admin/Pages/ManageProduct";
import UpdatePage from "../Admin/Pages/UpdatePage";
import { ToastContainer } from 'react-toastify'
// ===================================================================================

export const AllRoutes = () => {
  <ToastContainer position="top-center" theme="dark" />
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/ProductDetails" element={<ProductDetails />}></Route>
      <Route path="/menproduct" element={<Products category="Mens" />} />
      <Route path="/womenproduct" element={<Products category="Womens" />} />
      <Route path="/kidproduct" element={<Products category="Kids" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/order" element={<MyOrders />} />
      <Route path="/admin/dashboard" element={<AdminPage />} />
      <Route path="/admin/addproduct" element={<AdminAddProduct/>}/>
      <Route path="//admin/manageproducts" element={<ManageProduct/>}/>
      <Route path="/admin/favourits" element={<AdminAddProduct/>}/>
      <Route path="/admin/calenders" element={<CalenderPage/>}/>
      <Route path="/admin/piechart" element={<PieChartPage/>}/>
      <Route path="/admin/barchart" element={<BarChartPage/>}/>
      <Route path="/admin/linechart" element={<LineChartPage/>}/>
      <Route path="/admin/geographychart" element={<GeoChartpage/>}/>
      <Route path="/admin/support" element={<SupportPage/>}/>
      <Route path="/admin/frequentlyaskedquestions" element={<FAQPage/>}/>
      <Route path="/admin/tutorial" element={<Tutorialpage/>}/>
      <Route path="/:id/:title/edit" element={<UpdatePage/>} />
     
    </Routes>
  );
};
