import styled from 'styled-components';

export const Container = styled.div`
`;

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Button = styled.button``;

export const ContainerMainCokie = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
  border-left: 1px solid rgb(0 0 0 / 20%);
  border-right: 1px solid rgb(0 0 0 / 20%);
  border-bottom: 1px solid rgb(0 0 0 / 20%);
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  
  >div:first-child {
    border-bottom: 1px solid rgb(0 0 0 / 20%);
    padding-bottom: 18px;
    margin-bottom: 25px;
  }

  >div:first-child>h1 {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }

  >span {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.54);
  }
`;

interface ContainerCheckoutProps {
  $whatContainerCheckout: number;
}

export const ContainerCheckout = styled.div<ContainerCheckoutProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  /* margin: 20px 0px; */
  margin: ${props => props.$whatContainerCheckout === 1 && "20px 0px"};

  >div:first-child{
    border: 1px solid rgba(0, 0, 0, .14);
    /* background-color: #ee4d2d; */
    border-radius: 2px;
    box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, .02);
    box-sizing: initial;
    flex-shrink: 0;
    height: 16px;
    margin-right: 8px;
    position: relative;
    text-align: center;
    user-select: none;
    width: 16px;
    cursor: pointer;
    background-color: #fff;
  }

  >div:first-child::before {
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    content: "";
    height: 5px;
    left: 3px;
    position: absolute;
    top: 3px;
    transform: rotate(-45deg);
    width: 9px;
  }

  >span {
    cursor: default;
  }
`;

export const ContainerCookiesEssential = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(0 0 0 / 20%);
  padding-bottom: 10px;
  margin-bottom: 15px;

  >h1 {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    padding-bottom: 5px;
  }

  >span {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.54);
  }
`;

interface ContainerCoockieAfterCoockiesEssentialThreeProps {
  $whatContainerCheckout: number;

}

export const ContainerCoockieAfterCoockiesEssentialThree = styled.div<ContainerCoockieAfterCoockiesEssentialThreeProps>`
  display: flex;
  padding-bottom: 10px;
  /* margin-bottom: 15px; */
  /* border-bottom: 1px solid rgb(0 0 0 / 20%); */
  border-bottom: ${props => props.$whatContainerCheckout === 1 && "1px solid rgb(0 0 0 / 20%)"};
  margin-bottom: ${props => props.$whatContainerCheckout === 1 && "15px"};
`;

export const ContainerCoockieAfterCoockiesEssentialThreeInner = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    padding-bottom: 5px;
  }

  >span {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const ContainerSeeMore = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;

  >span {
    font-size: 14px;
    font-weight: 400;
  }

  >svg{
    width: 12px;
    /* height: 12px; */
    fill: #555;
  }
`;

export const ContainerButtonConfirm = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;

  >button {
    background-color: #ee4d2d;
    color: #fff;
    border: none;
    width: 140px;
    height: 40px;
  }
`;