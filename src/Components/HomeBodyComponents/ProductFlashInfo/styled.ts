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

export const ContainerProductImgAndPrice = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 18px;
    font-weight: 500;
    color: rgb(238, 77, 45);
    text-align: center;
    margin-bottom: 7px;
  }
`;

export const ContainerProductImg = styled.div`
  display: flex;
  width: 170px;
  position: relative;
  margin-bottom: 15px;

  > img:nth-child(2) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
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