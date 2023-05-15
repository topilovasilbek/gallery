import React, { useEffect, useState } from "react";
import HelmetComponent from "./helmet";
import HomeImagesComponent from "./../../components/HomeImages";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./../../components/Loader/index";

function HomeImages() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    setStatus("pending");
    fetch(`https://dog.ceo/api/breed/${category}/images/random`)
      .then((res) => res?.json())
      .then((res) => {
        if (res?.status !== "success") navigate("/404");
        setStatus("success");
      });
  }, [category]);

  return (
    <>
      <HelmetComponent category={category} />
      {status === "success" ? (
        <HomeImagesComponent category={category} />
      ) : status === "pending" ? (
        <Loader />
      ) : (
        navigate("/404")
      )}
    </>
  );
}

export default HomeImages;
