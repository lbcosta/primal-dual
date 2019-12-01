import styled from "styled-components";

export const PageLogo = styled.img`
  border-radius: 5px;
  width: 20%;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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
  border: 1px red solid;

  &,
  & > div {
    min-width: 300px;
  }
`;

export const StaticSide = styled.div`
  & > div {
    display: flex;
    align-items: center;
    > div {
      min-width: 100px;
    }
  }
`;

export const DynamicSide = styled.div``;

export const Equation = styled.ul`
  display: flex;
  min-height: 38px;
`;

export const Variable = styled.li``;
