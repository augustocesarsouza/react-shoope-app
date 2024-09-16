import { styled } from 'styled-components';

export const Container = styled.div`
`;

export const Span = styled.span`
`;

export const ContainerTypeCodeVerificationMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerVerificationCodeHeaderMain = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 90px;
  margin-top: 13px;
  position: relative;
`;

export const ContainerVerificationCodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0px 0px;
  width: 1200px;
  font-size: 13px;
  font-weight: 300;

  >span {
    font-size: 14px;
    color: #ee4d2d;
  }
`;

export const ContainerImgShopeeSpanVerficationCode = styled.div`
  display: flex;
`;

export const ContainerSVGShopee = styled.div`
  display: flex;
  align-items: flex-end;

  >svg {
    width: 190px;
    height: 42px;
    fill: #ee4d2d;
  }

  >span {
    font-size: 24px;
    font-weight: 400;
    color: rgb(34, 34, 34);
  }
`;

export const ContainerInvalidCode = styled.div`
  border: 1px solid #ff000038;
  padding: 13px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 330px;
  margin-left: 70px;

  >svg {
    width: 16px;
  }

  >span {
    font-size: 14px;
  }
`;

export const ContainerTypeCodeVerification = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 225px;
`;

export const ContainerTypeCode = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 20px;

  >span {
    font-size: 20px;
  }
`;

export const ContainerSvgArrow = styled.div`
  display: flex;
  cursor: pointer;

  >svg {
    width: 20px;
    height: 20px;
    fill: #ee4d2d;
  }
`

export const ContainerYourCodeWasSendSmsMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 50px 0px 50px;
  height: 425px;
  border-bottom: 1px solid #00000024;
  margin-left: 60px;
`;

export const ContainerYourCodeWasSendSms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;

  >span {
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    margin: 10px 0 8px;
  }
`;

export const SpanPhone = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-weight: 600;
`;

export const ContainerInputCode = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 4px; */
  margin: 50px 0 10px;
  width: 100%;
`

export const InputCelphone = styled.input`
  outline: none;
  width: 10%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  border-bottom: 1px solid #00000057;
  font-size: 27px;
`;

export const ContainerSplit = styled.div`
  color: #ff424f;
  font-size: 14px;
  min-height: 70px;
  text-align: center;
`

export const ContainerDidNotReceiveTheCodeAndButtonNext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContainerDidNotReceiveTheCode = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  gap: 3px;

  > span > button{
    border: none;
    cursor: pointer;
    color: #508be3;
  }
`;

export const Button = styled.button`
`

export const ContainerButtonNext = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  height: 40px;

  > button {
    cursor: not-allowed;
    opacity: .7;
    background-color: #ee4d2d;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .09);
    color: #fff;
    border: none;
    width: 100%;
  }
`;

export const ContainerCodeIsWrong = styled.div`
  margin-bottom: 20px;

  >h1 {
    font-size: 17px;
    color: #eb3232;
  }
`;

export const ContainerTimePass = styled.div`
  

  >h1 {
    font-size: 12px;
    color: #0a0a0a47;
  }
`;

export const H1 = styled.h1`

`;