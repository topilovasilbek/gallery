import React from "react";
import { Container, ProfileDiv, Row, RowsContainer, Title } from "./style";
import { ReactComponent as Avatar } from "../../assets/images/avatar.svg";

function ProfileComponent() {
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  return (
    <ProfileDiv>
      <Container>
        <Avatar />
        <Title>Profile information</Title>
        <RowsContainer>
          {Object.entries(data)?.map(([key, value], index) => (
            <Row key={index}>
              <span>{key}:</span> {value}
            </Row>
          ))}
        </RowsContainer>
      </Container>
    </ProfileDiv>
  );
}

export default ProfileComponent;
