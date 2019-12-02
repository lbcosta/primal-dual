import styled from "styled-components";

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
`;

export const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const PageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80%;
  width: 80%;
  border-radius: 10px;

  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Container = styled.div`
  display: flex;
  width: 95%;
  height: 95%;

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
      min-width: 100px;
      margin-right: 10px;
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
    width: 80px;
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
