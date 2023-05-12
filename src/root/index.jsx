import React, { Suspense, lazy } from "react";
import HelmetComponent from "./helmet";
import ToTopButton from "../components/ToTopButton";
import { GlobalStyles } from "./style";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./../components/Auth/index";
const HomePage = lazy(() => import("./../pages/Home"));
const HomeImages = lazy(() => import("./../pages/HomeImages"));
const Profile = lazy(() => import("./../pages/Profile"));
const SignUp = lazy(() => import("./../pages/SignUp"));
const NotFound = lazy(() => import("./../pages/404-NotFound/index"));
const NoPermission = lazy(() => import("./../pages/401-NoPermission/index"));

function Root() {
  return (
    <>
      <HelmetComponent />
      <ToTopButton />
      <GlobalStyles />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/home" element={<Auth component={HomePage} />} />
          <Route
            path="/home/images"
            element={<Auth component={HomeImages} />}
          />
          <Route path="/profile" element={<Auth component={Profile} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/401" element={<NoPermission />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Root;
