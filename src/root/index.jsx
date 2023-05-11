import React from "react";
import HelmetComponent from "./helmet";
import ToTopButton from "../components/ToTopButton";
import { GlobalStyles } from "./style";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./../pages/Home";

function Root() {
  return (
    <>
      <HelmetComponent />
      <ToTopButton />
      <GlobalStyles />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        {/* <Route path="*" element={<NoMatch404 />} /> */}
      </Routes>
    </>
  );
}

export default Root;
