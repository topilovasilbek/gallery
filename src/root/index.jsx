import React, { Suspense, lazy } from "react";
import HelmetComponent from "./helmet";
import Footer from "./../components/Footer";
import ToTopButton from "../components/ToTopButton";
import { GlobalStyles } from "./style";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./../components/Auth";
import Loader from "../components/Loader";

const HomePage = lazy(() => import("./../pages/Home"));
const Profile = lazy(() => import("./../pages/Profile"));
const SignUp = lazy(() => import("./../pages/SignUp"));
const NotFound = lazy(() => import("./../pages/404-NotFound"));

function Root() {
  return (
    <>
      <HelmetComponent />
      <ToTopButton />
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/home/*" element={<Auth component={HomePage} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default Root;
