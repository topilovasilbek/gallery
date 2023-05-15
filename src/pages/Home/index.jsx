import React from "react";
import HelmetComponent from "./helmet";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./../../components/Navbar";
import HomeComponent from "./../../components/Home/index";
import HomeImages from "./../HomeImages";

function HomePage() {
  return (
    <>
      <HelmetComponent />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/:category" element={<HomeImages />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default HomePage;
