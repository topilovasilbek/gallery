import React, { lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HelmetComponent from "./helmet";
import Loader from "./../../components/Loader";
const SignUpComponent = lazy(() => import("./../../components/SignUp"));

function SignUp() {
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) setStatus("fulfilled");
    else setStatus("rejected");
  }, []);

  return status === "loading" ? (
    <Loader />
  ) : status === "fulfilled" ? (
    navigate("/")
  ) : (
    <>
      <HelmetComponent />
      <SignUpComponent />
    </>
  );
}

export default SignUp;
