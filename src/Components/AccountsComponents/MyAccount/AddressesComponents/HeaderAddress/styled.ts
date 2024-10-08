import styled from 'styled-components';

export const Container = styled.div``;

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Button = styled.button``;

export const ContainerMainAddresses = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;


  >h1 {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ContainerInsertAddressMain = styled.div`
  background-color: #ee4d2d;
  font-size: 14px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #ee5c3f;
  }
`;

export const ContainerInsertAddress = styled.div`
  display: flex;
  gap: 5px;

  >span {
    font-size: 14px;
    color: #fff;
  }
`;

export const ContainerSvgPlus = styled.div`
  display: flex;
  
  >svg {
    width: 14px;
    height: 14px;
    fill: #fff;
  }
`;