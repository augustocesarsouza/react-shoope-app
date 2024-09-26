import styled from "styled-components";

export const Container = styled.div``;

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  width: 950px;
`;

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

export const ContainerSvgThereIsNoAddresses = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 500px;

  >svg {
    width: 120px;
    height: 120px;
  }

  >span {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0,0,0,.65);
  }
`;

export const ContainerAddressUserMain = styled.div`
  display: flex;
  flex-direction: column;

  >span {
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const ContainerAddressUserDetails = styled.div`
`;

export const ContainerNameAndPhoneNumberAndButtonEditDelete = styled.div`
  display: flex; 
  justify-content: space-between;
`;

export const ContainerNameAndPhoneNumber = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;

  span:nth-child(1) {
    font-size: 16px;
    font-weight: 500;
  }

  >div {
    border-left: 1px solid rgba(0, 0, 0, .26);
    margin: 0 8px;
    height: 25px;
  }

  span:nth-child(3) {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const ContainerButton = styled.div`
  display: flex; 
  align-items: center;
  gap: 8px;

  >button {
    font-size: 14px;
    font-weight: 400;
    border: none;
    color: #08f;
  }
`;