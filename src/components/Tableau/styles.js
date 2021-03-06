import styled from "styled-components";

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
    min-width: 35px;
  }

  input {
    text-align: center;
    background-color: #f2f2f2;
    border: none;
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

  span:first-of-type {
    min-width: 35px;
  }
`;

export const ConversionButton = styled.div`
  display: flex;
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
    background-color: #74b9ff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: background-color 150ms ease-in-out;

    :hover {
      background-color: #0984e3;
    }
  }

  button + button {
    background-color: #555;
    :hover {
      background-color: #333;
    }
  }
`;

export const EqualityConstraints = styled.ul`
  display: flex;
  margin-top: 10px;

  li {
    display: inline;
    min-width: 120px;

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
