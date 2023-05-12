import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth({ component: Component }) {
  const [status, setStatus] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    if (5 > 3) setStatus("fulfilled");
    else setStatus("rejected");
  }, []);

  return status === "loading" ? (
    <h2>loading</h2>
  ) : status === "fulfilled" ? (
    <Component />
  ) : (
    navigate("/401")
  );
}

export default Auth;
