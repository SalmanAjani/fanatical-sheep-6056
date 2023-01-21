import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import Navbar from "../Client/NavBar/NavBar";
import Footer from "../Client/Footer/Footer";
import { ProductPreviewPage } from "../Admin/Pages/ProductPreviewPage";
import { useSelector } from "react-redux";

// ===================================================================================

export const AllRoutes = () => {
  <ToastContainer position="top-center" theme="dark" />;
  const {
    data: { isAuthenticated },
  } = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Home /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/ProductDetails"
          element={
            <>
              <Navbar />
              <ProductDetails />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/menproduct"
          element={
            <>
              <Navbar />
              <Products category="Mens" />
              <Footer />
            </>
          }
        />
        <Route
          path="/womenproduct"
          element={
            <>
              <Navbar />
              <Products category="Womens" />
              <Footer />
            </>
          }
        />
        <Route
          path="/kidproduct"
          element={
            <>
              <Navbar />
              <Products category="Kids" />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            !isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <>
                <Navbar />
                <Cart />
                <Footer />
              </>
            )
          }
        />

        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <>
                <Navbar />
                <Signup />
                <Footer />
              </>
            )
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <>
                <Navbar />
                <Login />
                <Footer />
              </>
            )
          }
        />

        <Route
          path="/order"
          element={
            !isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <>
                <Navbar />
                <MyOrders />
                <Footer />
              </>
            )
          }
        />

        <Route path="/admin/dashboard" element={<AdminPage />} />
        <Route path="/admin/addproduct" element={<AdminAddProduct />} />
        <Route path="//admin/manageproducts" element={<ManageProduct />} />
        <Route path="/admin/favourits" element={<AdminAddProduct />} />
        <Route path="/admin/calenders" element={<CalenderPage />} />
        <Route path="/admin/piechart" element={<PieChartPage />} />
        <Route path="/admin/barchart" element={<BarChartPage />} />
        <Route path="/admin/linechart" element={<LineChartPage />} />
        <Route path="/admin/geographychart" element={<GeoChartpage />} />
        <Route path="/admin/support" element={<SupportPage />} />
        <Route path="/admin/frequentlyaskedquestions" element={<FAQPage />} />
        <Route path="/admin/tutorial" element={<Tutorialpage />} />
        <Route path="/:id/:title/edit" element={<UpdatePage />} />
        <Route
          path="/:id/:title/displayproduct"
          element={<ProductPreviewPage />}
        />
      </Routes>
    </>
  );
};
