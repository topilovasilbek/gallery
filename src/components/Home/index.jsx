import React, { useEffect, useState } from "react";
import { Box, Container, HomeComponentDiv, Title } from "./style";
import Loader from "../Loader";
import { toTop } from "./../../resources/toTop";

function HomeComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((res) => {
        setData(Object.keys(res?.message));
      });
  }, []);

  return (
    <HomeComponentDiv>
      <Container>
        {data && <Title>Select a category to see images</Title>}
      </Container>
      {data ? (
        <Container>
          {data.map((item, index) => (
            <Box to={item} onClick={toTop} key={index}>
              {item}
            </Box>
          ))}
        </Container>
      ) : (
        <Loader />
      )}
    </HomeComponentDiv>
  );
}

export default HomeComponent;
