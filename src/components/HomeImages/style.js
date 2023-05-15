import styled from "styled-components";
import { globalContainer } from "../../root/style";

export const HomeImagesDiv = styled.div`
  background-color: #fff;
  padding-block: 20px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Image = styled.div`
  aspect-ratio: 1 / 1;
  width: calc(20% - 16px);
  border-radius: 5px;
  background-color: #e5e5e5;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
