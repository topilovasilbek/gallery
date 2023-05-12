import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpComponent from "./../../components/SignUp/index";

function SignUp(props) {
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    if (5 > 5) setStatus("fulfilled");
    else setStatus("rejected");
  }, []);

  return status === "loading" ? (
    <h2>loading</h2>
  ) : status === "fulfilled" ? (
    navigate("/")
  ) : (
    <SignUpComponent />
  );
}

export default SignUp;
