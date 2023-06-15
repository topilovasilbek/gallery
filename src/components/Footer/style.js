import styled from "styled-components";
import { globalContainer } from "./../../root/style";

export const FooterDiv = styled.div`
  background-color: var(--dark-blue);
  padding-block: 15px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  color: #fff;

  a {
    /* text-decoration: none; */
    color: #fff;
  }
`;
