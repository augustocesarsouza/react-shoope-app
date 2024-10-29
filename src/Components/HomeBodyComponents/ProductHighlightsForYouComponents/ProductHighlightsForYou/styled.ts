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

export const ContainerHighlightsForYou = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  position: relative;

  >h1 {
    font-size: 16px;
    font-weight: 500;
    color: #ee4d2d;
  }
`;

export const ContainerProductHighlight = styled.div`
  display: flex;

  overflow-x: hidden;
`;

export const ImgFreeShipping = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const ContainerDiscountPercentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #ffe97a;
  color: #ec3814;
  width: 50px;
  border-radius: 1px;

  >h1 {
    font-size: 12px;
  }

  >svg {
    width: 10px;
  }

  >span {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const ContainerPopular = styled.div`
  /* display: flex; */
  height: 16px;
  position: relative;
  width: 100%;

  >span {
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    left: 58px;
    top: 1px;
    color: #fff;
    z-index: 7;
  }
`;

export const ContainerBackgroundFaint = styled.div`
  background-color: #ffbda6;
  border-radius: 8px;
  z-index: 1;
  width: inherit;
  height: inherit;
  left: 0;
  position: absolute;
  top: 0;
`;

interface ContainerBackgroundUpProps {
  $valuePercentage: number;
}

export const ContainerBackgroundUp = styled.div<ContainerBackgroundUpProps>`
  background: linear-gradient(270deg, #ffb000, #eb1717);
  border-radius: 8px 0px 0px 8px;
  width: ${props => props.$valuePercentage}%;
  height: inherit;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 5;
`;

export const ContainerArrowLeft = styled.div`
  position: absolute;
  left: 0px;
  top: 120px;
  width: 80px;
  /* height: 100%; */
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
 

  >div {
    background-color:  #fff;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 4px 0px black;
  }

  >div>svg {
    fill: #0000008f;
    width: 14px;
    height: 14px;
  }
`;

export const ContainerArrowRight = styled.div`
  position: absolute;
  right: 0px;
  top: 120px;
  z-index: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000061;
  border-radius: 50%;
  
  >div {
    background-color:  #fff;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 4px 0px black;
  }

  >div>svg {
    fill: #0000008f;
    width: 14px;
    height: 14px;
  }
`;