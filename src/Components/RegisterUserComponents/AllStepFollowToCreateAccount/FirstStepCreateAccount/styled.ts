import { styled } from 'styled-components';

export const Container = styled.div`

`;

export const Span = styled.span`

`;

export const ContainerTypeCodeVerification = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerTypeCode = styled.div`
  display: flex;
  gap: 50px;

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
  padding: 40px 0px 0px 70px;
  height: 425px;
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
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: 400;

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