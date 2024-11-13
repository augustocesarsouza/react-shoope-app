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

export const ContainerMain = styled.div`
`;

export const ContainerAllProductHourMain = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  
  margin-bottom: 50px;
  border-bottom: 3px solid red;
  padding-bottom: 50px;
`;

interface ContainerProductFlashOfferProps {
  $lastProduct: boolean;
}

export const ContainerProductFlashOffer = styled.div<ContainerProductFlashOfferProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ContainerProductHour = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;

  >img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerInfoAboutProductFlashOffer = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;

  >h1 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

export const ContainerPriceOriginalAndPriceWithDiscountAndButtonBuyNow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContainerPriceOriginalAndPriceWithDiscount = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const ContainerButtonBuyNow = styled.div`
  display: flex;
  /* height: 50px; */
  width: 88px;
  background-color: #ee4d2d;
  color: white;
  border: none;
  border-radius: 6px;
  
  >span {
    font-size: 18px;
    font-weight: 300;
    text-align: center;
  }
`;

export const ContainerDiscountPercentageMain = styled.div`
  display: flex;

  >span {
    font-size: 16px;
    font-weight: 400;
    text-decoration: line-through;
    padding-right: 4px;
    color: rgba(0, 0, 0, 0.26);
  }
`;

export const ContainerDiscountPercentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #ffe97a;
  color: #ec3814;
  border-radius: 1px;

  >h1 {
    font-size: 12px;
  }

  >svg {
    width: 10px;
  }

  >span {
    font-size: 15px;
    font-weight: 500;
  }
`;

export const ContainerPriceProductMain = styled.div`
  color: rgb(238, 77, 45);
  margin-bottom: 5px;

  >span:nth-child(1){
    font-size: 18px;
  }

  >span:nth-child(2){
    font-size: 28px;
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
    left: 50%;
    top: 1px;
    color: #fff;
    z-index: 7;
    transform: translateX(-50%);

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