import styled from "styled-components";
import { globalContainer } from "../../root/style";
import { Link } from "react-router-dom";

export const HomeComponentDiv = styled.div`
  min-height: 100vh;
  background-color: #fff;
  padding-block: 20px 100px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Box = styled(Link)`
  text-decoration: none;
  aspect-ratio: 2.5 / 1;
  width: calc(20% - 16px);
  padding: 7px 15px;
  background-color: var(--light-blue);
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.2s linear;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }

  @media screen and (max-width: 900px) {
    width: calc(25% - 15px);
  }
  @media screen and (max-width: 700px) {
    width: calc(100% / 3 - 40px / 3);
  }
  @media screen and (max-width: 500px) {
    width: calc(50% - 10px);
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-block: 10px 30px;
  color: var(--dark-blue);
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;
