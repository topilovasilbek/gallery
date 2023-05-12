import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #43697B; // 1F485B
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 450px;
    padding: 30px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
      outline: none;
      border: 1px solid var(--dark-color);
      color: var(--dark-color);
      padding: 10px 15px;
      border-radius: 3px;
      font-size: 15px;
    }

    button {
      padding: 7px 25px;
      min-width: 100px;
      max-width: 150px;
      margin: 0 auto;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 15px;
      font-weight: 600;
      background-color: transparent;
      border: 1px solid var(--dark-color);
      border-radius: 3px;
      color: var(--dark-color);
    }
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  color: var(--dark-color);
  text-align: center;
  letter-spacing: 3px;
`;
