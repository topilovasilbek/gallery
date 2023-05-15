import styled from "styled-components";
import { globalContainer } from "./../../root/style";

export const ProfileDiv = styled.div`
  background-color: #fff;
  padding-block: 20px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: var(--dark-blue);
  text-align: center;
`;

export const RowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Row = styled.div`
  font-size: 16px;
  color: var(--light-blue);

  span {
    display: inline-block;
    width: 70px;
    text-align: end;
    margin-right: 10px;
    font-weight: 600;
    color: var(--dark-blue);
  }
`;
