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
import FAQPage from "../Admin/Pages/FAQPage";
import BarChartPage from "../Admin/Pages/BarChartPage";
import { LineChartPage } from "../Admin/Pages/LineChartPage";
import GeoChartpage from "../Admin/Pages/GeoChartpage";
import PieChartPage from "../Admin/Pages/PieChartPage";
import { CalenderPage } from "../Admin/Pages/CalenderPage";
import SupportPage from "../Admin/Pages/SupportPage";
import { Tutorialpage } from "../Admin/Pages/Tutorialpage";
import { ManageProduct } from "../Admin/Pages/ManageProduct";




// ===================================================================================

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/ProductDetails" element={<ProductDetails />}></Route>

      <Route path="/cart" element={<Cart />} />

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
      <Route path="/:displayid/:id/:title/edit" element={<Editproduct/>} />
    </Routes>
  );
};
