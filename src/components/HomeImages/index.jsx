import React, { useEffect, useState } from "react";
import { Container, HomeImagesDiv, Image, Title } from "./style";
import Loader from "../Loader";

function HomeImagesComponent({ category }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${category}/images`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.message);
      });
  }, [category]);

  return (
    <HomeImagesDiv>
      {data ? (
        <Container>
          <Title>{category}</Title>
          {data.map((item, index) => (
            <Image url={item} key={index} />
          ))}
        </Container>
      ) : (
        <Loader />
      )}
    </HomeImagesDiv>
  );
}

export default HomeImagesComponent;
