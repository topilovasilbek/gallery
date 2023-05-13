import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: var(--light-blue);
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 90%;
    max-width: 450px;
    padding: 30px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    ::-webkit-input-placeholder {
      font-size: 14px;
      color: var(--dark-blue);
    }

    :-ms-input-placeholder {
      font-size: 14px;
      color: var(--dark-blue);
    }

    ::placeholder {
      font-size: 14px;
      color: var(--dark-blue);
    }

    input {
      outline: none;
      border: 1px solid var(--dark-blue);
      color: var(--dark-blue);
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
      border: 1px solid var(--dark-blue);
      border-radius: 3px;
      color: var(--dark-blue);
    }
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  color: var(--dark-blue);
  text-align: center;
  letter-spacing: 3px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
