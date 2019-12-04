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

export const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const PageContent = styled.div`
  /* display: flex;
  flex-direction: column; */

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  height: 80%;
  width: 80%;
  border-radius: 10px;

  background-color: #fff;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  background-color: transparent;
  perspective: 1000px;
`;

export const Inner = styled.div`
  height: 100%;

  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  ${props =>
    props.converted &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const Flip = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: #fff;

  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const Front = styled(Flip)``;

export const Back = styled(Flip)`
  transform: rotateY(180deg);
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

export const AddButton = styled.button`
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

export const AddConstraintButton = styled(AddButton)`
  width: 100%;
  height: 30px;
  margin-top: 5px;
`;

export const AddVariableButton = styled(AddButton)`
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
    background-color: rgb(116, 185, 255);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: background-color 150ms ease-in-out;

    :hover {
      background-color: #0097e6;
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
