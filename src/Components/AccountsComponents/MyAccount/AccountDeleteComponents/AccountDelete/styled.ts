import styled from 'styled-components';

export const Container = styled.div`
`;

export const H1 = styled.h1``;

export const H2 = styled.h2``;

export const Span = styled.span``;

export const Button = styled.button``;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 27px;
  padding-bottom: 20px;
`;

export const Li = styled.li`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;

  >h1 {
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid #4f4f4f2e;
    padding-bottom: 17px;
    margin-bottom: 17px;
  }
`;

export const ContainerBodyAccountDelete = styled.div`
  display: flex;
  flex-direction: column;

  >h2 {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    padding-bottom: 10px;
  }
`;

export const ContainerButtonContinue = styled.div`
  display: flex;
  border-bottom: 1px solid #4f4f4f2e;
  padding-bottom: 20px;

  >button {
    padding: 12px 50px;
    border: none;
    background-color: #ee4d2d;
    color: #fff;
    cursor: pointer;
  }

  >button:hover {
    background-color: #ee5c3f;
  }
`;