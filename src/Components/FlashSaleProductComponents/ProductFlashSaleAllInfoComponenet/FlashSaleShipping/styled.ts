import styled from 'styled-components';

export const H1 = styled.h1`
`;

export const Img = styled.img`
`;

export const Span = styled.span`
`;

export const Input = styled.input`
`;

export const Button = styled.button`
`;

export const Container = styled.div`
`;

export const ContainerShippingMain = styled.div`
  display: flex;
  align-items: unset;
  margin-bottom: 25px;
  position: relative;

  >h1 {
    font-size: 15px;
    font-weight: 400;
    color: rgb(117, 117, 117);
    width: 115px;
  }
`;

export const ContainerShippingDescriptionMain = styled.div`
  display: flex;
  align-items: unset;

  >svg {
    margin-right: 7px;
  }
`;

export const ContainerShippingDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ContainerShippingDescriptionInnerProps {
  $index: number;
}

export const ContainerShippingDescriptionInner = styled.div<ContainerShippingDescriptionInnerProps>`
  display: flex;
  align-items: center;

  margin-bottom: ${props => props.$index === 1 && "10px"};
  margin-bottom: ${props => props.$index === 2 && "15px"};

  >span:nth-of-type(1){
    font-size: 15px;
    margin-right: ${props => props.$index === 1 && "55px"};
    margin-right: ${props => props.$index === 2 && "80px"};
    color: rgb(99, 99, 99);
  }
`;

interface ContainerLocationUserProps {
  $spanAddress: string;
}

export const ContainerLocationUser = styled.div<ContainerLocationUserProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: 190px;
  width: ${props => props.$spanAddress.length <= 0 ? "190px" : "340px"};

  >span:nth-of-type(1){
    font-size: 15px;
    margin-right: 7px;
    font-weight: 500;
  }

  >svg {
    width: 12px;
    transform: rotate(180deg);
  }
`;

export const ContainerShippingPrices = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  >span:nth-of-type(1){
    font-size: 15px;
    margin-right: 7px;
    color: rgb(146, 146, 146);
    text-decoration: line-through;
    /* font-weight: 500; */

    &:hover {
      color: red;
    }
  }

  >span:nth-of-type(2){
    font-size: 15px;
    margin-right: 7px;
  }
`;

export const ContainerSvgArrowTop = styled.div`
  display: flex;

  >svg {
    width: 12px;
    transform: rotate(180deg);
  }
`;

export const ContainerDiscoutQuantity = styled.div`
  display: flex;

  >span:nth-of-type(1) {
    font-size: 15px;

    >span {
      font-weight: 500;
    }
  }
`;

export const ContainerCepAllInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  position: absolute;
  right: 100px;
  top: 22px;
  background-color: white;
  padding: 24px;
  border-radius: 3px;
  border: 1px solid #00000024;
  width: 350px;
  height: 149px;

  >span:nth-of-type(1) {
    font-size: 13px;
    color: #08f;
    text-align: center;
    cursor: pointer;
  }
`;

export const ContainerCepAllInfo2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  >div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 7px;
  }

  >div:nth-of-type(1) > input {
    display: flex;
    border-radius: 2px;
  }

  >div:nth-of-type(1) > button {
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: #f7a696;
    width: 100%;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  >div:nth-of-type(2) > span:nth-of-type(1) {
    font-size: 13px;
    color: red;
    text-align: center;
  }
`;

export const InputCep = styled.input`
  display: flex;

  outline: none;
  height: 40px;
  border: 1px solid rgba(0,0,0,.54);
  padding: 10px;
`;

export const ContainerSpanCepError = styled.div`
  display: flex;
`;

export const ContainerAddressUserMain = styled.div`
  display: flex;
`;

export const ContainerAddressUser = styled.div`
  display: flex;

  >svg {
    width: 13px;
    height: 13px;
    margin-right: 8px;
  }

  >span:nth-of-type(1){
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
  }
`;
