import React from "react";
import { Container, FooterDiv, Text } from "./style";

function Footer() {
  return (
    <FooterDiv>
      <Container>
        <Text>
          Made by{" "}
          <a href="https://topilovdev.uz" target="_blank" rel="noreferrer">
            Asilbek
          </a>
        </Text>
      </Container>
    </FooterDiv>
  );
}

export default Footer;
