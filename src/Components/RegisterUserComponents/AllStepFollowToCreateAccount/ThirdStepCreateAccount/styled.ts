import { styled } from 'styled-components';

export const Container = styled.div`
`;

export const Span = styled.span`
`;

export const H1 = styled.h1`
`;

export const Button = styled.button`
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21%;

  >h1 {
    font-size: 17px;
    color: #484343;
    margin-bottom: 30px;
  }

  >span {
    font-size: 14px;
    text-align: center;
    color: #484343;
  }
`;

export const ContainerCheck = styled.div`
  width: 50px;
  height: 50px;
  padding: 5px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #00ff00;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  >svg {
    width: 80%;
    height: 80%;
    color: #00ff00;
  }
`;

export const ContainerButtonBackToShopee = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  

  >button {
    background-color: rgb(238, 77, 45);
    color: #fff;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 500;
    padding: 9px 0px;
    cursor: pointer;

    &:hover {
      background-color: rgb(238 92 63);
    }
  }
`;

export const SpanYouCreateAccount = styled.span`
  margin-bottom: 20px;
`;

export const SpanNumber = styled.span`
  color: #ff5722;
`;