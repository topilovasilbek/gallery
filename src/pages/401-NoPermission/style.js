import styled from "styled-components";
import { globalButton, globalContainer } from "./../../root/style";

export const Container = styled.div`
  ${globalContainer};
  margin: 0 auto;
  min-height: calc(100vh - 40px);
  padding-block: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    width: 100%;
    max-width: 400px;
  }

  button {
    ${globalButton}
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  color: var(--dark-blue);
  margin-bottom: 20px;
  text-align: center;
`;
