import { styled } from "styled-components";
import { globalContainer } from "../../root/style";

export const Container = styled.div`
  ${globalContainer};
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 75px;
  height: 75px;
  border: 5px solid rgba(31, 72, 91, 0.25);
  border-top-color: var(--dark-blue);
  border-radius: 50%;
  animation: spinner 0.75s linear infinite;

  @keyframes spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
