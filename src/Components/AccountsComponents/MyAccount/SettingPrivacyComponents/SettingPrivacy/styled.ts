import styled from 'styled-components';

export const Container = styled.div`
`;

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
  gap: 20px;

  >h1 {
    font-size: 20px;
    font-weight: 500;
    /* padding-bottom: 15px; */
  }
`;

export const ContainerRequestDeleteAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid #1e1e1e1a;
  padding-top: 10px;

  >span {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ContainerButtonDelete = styled.div`
  display: flex;

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