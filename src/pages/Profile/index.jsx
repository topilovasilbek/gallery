import React, { lazy, useEffect, useState } from "react";
import HelmetComponent from "./helmet";
const ProfileComponent = lazy(() => import("./../../components/Profile"));
const NoPermission = lazy(() => import("./../401-NoPermission/index"));

function Profile(props) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (localStorage.getItem("user")) setStatus("fulfilled");
    else setStatus("rejected");
  }, []);

  return status === "loading" ? (
    <h2>loading</h2>
  ) : status === "rejected" ? (
    <NoPermission />
  ) : (
    <>
      <HelmetComponent />
      <ProfileComponent />
    </>
  );
}

export default Profile;
