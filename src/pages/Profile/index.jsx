import React, { lazy, useEffect, useState } from "react";
import HelmetComponent from "./helmet";
import Loader from "./../../components/Loader";
import Navbar from "../../components/Navbar";
const ProfileComponent = lazy(() => import("./../../components/Profile"));
const NoPermission = lazy(() => import("../../components/401-NoPermission"));

function Profile() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (localStorage.getItem("user")) setStatus("fulfilled");
    else setStatus("rejected");
  }, []);

  return status === "loading" ? (
    <Loader />
  ) : status === "rejected" ? (
    <NoPermission />
  ) : (
    <>
      <HelmetComponent />
      <Navbar />
      <ProfileComponent />
    </>
  );
}

export default Profile;
