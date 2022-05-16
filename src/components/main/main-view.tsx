import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Cart from "../cart";
import Navbar from "../navbar";
import ProductDetails from "../productDetails";
import ProductListing from "../productListing";

const MainView: React.FC = () => {
  const loaderValue = useSelector((state: IState) => state.loaderReducer.value);

  return (
    <>
      <LoadingBar color="#FFAD66" progress={loaderValue} />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route>404 Not found</Route>
        </Routes>
      </Router>
    </>
  );
};
export default MainView;
