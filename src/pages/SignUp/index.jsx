import React, { lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HelmetComponent from "./helmet";
const SignUpComponent = lazy(() => import("./../../components/SignUp"));

function SignUp() {
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) setStatus("fulfilled");
    else setStatus("rejected");
  }, []);

  return status === "loading" ? (
    <h2>loading</h2>
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
