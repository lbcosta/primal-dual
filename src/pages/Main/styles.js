import styled, { css } from "styled-components";

export const PageLogo = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 20%;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  img {
    border-radius: 5px;
    max-width: 100%;
  }

  h2 {
    transform: translateY(-10px);
    text-align: center;
    font-family: "Montserrat", sans-serif;
    background: linear-gradient(to right, #e84118 0%, #4cd137 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: 1000px) {
    width: 250px;
    ::after {
      content: "Esta ferramenta não funciona em telas pequenas :(";
      font-family: "Montserrat", sans-serif;
      color: #aaa;
      text-align: center;
    }
  }
`;

export const ContentWrapper = styled.div`
  height: 80%;
  width: 98%;

  display: flex;

  > div:first-child {
    margin-left: -5px;
    margin-right: 10px;
  }
  /* justify-content: space-evenly; */
`;

export const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  /* height: 80%;
  width: 80%; */
  border-radius: 10px;
  min-width: 50%;

  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 7;
  overflow: auto;

  &,
  & > div {
    min-width: 150px;
  }

  p,
  span {
    font-weight: bold;
    font-size: 18px;
  }

  input {
    text-align: center;
  }
`;

export const StaticSide = styled.div`
  & > div {
    display: flex;
    align-items: center;
    margin: 5px;
    > div {
      min-width: 50px;
      margin: 0 10px 0 50px;
    }

    &:nth-of-type(2) {
      position: relative;

      p {
        position: absolute;
        right: 4px;
        margin-top: 15px;
      }
    }
  }
`;

export const DynamicSide = styled.div``;

export const Equation = styled.ul`
  display: flex;
  align-items: center;
  min-height: 38px;
`;

export const Variable = styled.li`
  display: flex;
  align-items: center;

  input[type="number"] {
    width: 80px;
    height: 40px;
    margin: 5px;
  }

  > div {
    display: inline-block;
    width: 40px;
    margin-left: 5px;
  }
`;

export const Button = styled.button`
  background-color: rgba(116, 185, 255, 0.1);
  border: 1.2px gray dashed;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  :active {
    transform: translateY(5px);
  }
  :hover {
    background-color: rgba(116, 185, 255, 0.3);
  }
`;

export const ConstraintButton = styled(Button)`
  width: 100%;
  height: 30px;
  margin-top: 5px;
`;

export const VariableButton = styled(Button)`
  width: 30px;
  height: 40px;
  margin-left: 5px;
`;

export const ConversionButton = styled.div`
  flex: 1;

  button {
    display: block;
    margin: auto;
    padding: 20px 20px;

    border: none;
    border-radius: 5px;

    font-weight: bold;
    font-size: 16px;

    color: #fff;
    background-color: #44bd32;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: background-color 150ms ease-in-out;

    :hover {
      background-color: #2f8422;
    }
  }
`;

export const EqualityConstraints = styled.ul`
  margin-top: 10px;
  li {
    display: inline;

    > div {
      display: inline-block;
      width: 40px;
      margin: 0 5px;
    }

    span ~ span {
      margin-right: 10px;
    }
  }
`;

export const ConstraintButtonGroup = styled.div`
  display: flex;

  button:first-child {
    border-right: none;
  }

  button + button {
    font-size: 18px;
    border-left: none;
    background-color: rgba(194, 54, 22, 0.2);
    :hover {
      background-color: rgba(194, 54, 22, 0.4);
    }
  }
`;

export const VariableButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  button {
    height: 20px;
  }

  button:first-child {
    border-bottom: none;
  }

  button + button {
    font-size: 16px;
    border-top: none;
    background-color: rgba(194, 54, 22, 0.2);
    :hover {
      background-color: rgba(194, 54, 22, 0.4);
    }
  }
`;
