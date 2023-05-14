import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth({ component: Component }) {
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) setStatus("fulfilled");
    else setStatus("rejected");
  }, []);

  return status === "loading" ? (
    <h2>loading</h2>
  ) : status === "fulfilled" ? (
    <Component />
  ) : (
    navigate("/signup")
  );
}

export default Auth;
