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

export const ContainerProductFlashSaleDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;

  >h1 {
    font-size: 21px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 15px;
  }
`;

export const ContainerRateAvaliation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerFirstRateAvaliation = styled.div`
  display: flex;
`;

export const ContainerRateAvaliationAndStars = styled.div`
  display: flex;
  line-height: 1.1;
  margin-right: 15px;

  >span:nth-of-type(1){
    font-size: 18px;
    font-weight: 400;
    color: red;
    border-bottom: 1px solid red;
    margin-right: 5px;
  }
`;

export const ContainerStarQuantity = styled.div`
  display: flex;

`;

export const ContainerStarMain = styled.div`
  /* display: flex; */
  margin-right: 1px;
  position: relative;
`;

interface ContainerStarProps {
  $fifthHalfStar: boolean;
  $fourthHalfStar: boolean;
  $thirdHalfStar: boolean;
  $secondHalfStar: boolean;
  $firstHalfStar: boolean;
  $allStarWithoutFill: boolean;
  $starIndex: number;
}

export const ContainerStar = styled.div<ContainerStarProps>`
  width: 100%;
  width: ${props => props.$starIndex === 4 && props.$fifthHalfStar === true && "50%"};

  width: ${props => (props.$starIndex === 3) && props.$fourthHalfStar === true && "50%"};
  width: ${props => props.$starIndex === 4 && (props.$fourthHalfStar === true || props.$thirdHalfStar === true || props.$secondHalfStar === true || props.$firstHalfStar === true) && "0%"};

  width: ${props => props.$starIndex === 2 && props.$thirdHalfStar === true && "50%"};
  width: ${props => props.$starIndex === 3 && (props.$thirdHalfStar === true || props.$secondHalfStar === true || props.$firstHalfStar === true) && "0%"};
  
  width: ${props => props.$starIndex === 1 && props.$secondHalfStar === true && "50%"};
  width: ${props => props.$starIndex === 2 && (props.$secondHalfStar === true || props.$firstHalfStar === true) && "0%"};

  width: ${props => props.$starIndex === 0 && props.$firstHalfStar === true && "50%"};

  width: ${props => (props.$starIndex === 1 || props.$starIndex === 2 || props.$starIndex === 3 || props.$starIndex === 4) 
  && (props.$firstHalfStar === true || props.$allStarWithoutFill === true) && "0%"};

  width: ${props => props.$starIndex === 0 && props.$allStarWithoutFill === true && "0%"};
  
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const ContainerAvaliation = styled.div`
  display: flex;
  align-items: center;

  >span:nth-of-type(1){
    margin-right: 4px;
    color: black;
    font-size: 16px;
    border-bottom: 1px solid black;
  }

  >span:nth-of-type(2){
    font-size: 15px;
    font-weight: 400;
    color: #767676;
  }
`;

export const ContainerReport = styled.div`
  display: flex;

  >span:nth-of-type(1){
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const ContainerStarImgFull = styled.div`
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/44c46951c46c5a5e8129.svg);
  background-repeat: no-repeat;
  background-size: contain;
  height: 14px;
  width: 14px;
`;

export const ContainerStarImg = styled.div`
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/2a44ed8141cd3a3ed0c9.svg);
  background-repeat: no-repeat;
  background-size: contain;
  height: 14px;
  width: 14px;
`;

export const SpanWhiteStripe = styled.div`
  margin-right: 15px;
  color: #0000004f;
`;

export const ContainerPrinceProductAndMoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 20px;
  
`;

export const ContainerPriceProduct = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  >span:nth-of-type(1){
    font-size: 16px;
    color: rgb(146, 146, 146);
    text-decoration: line-through;
    margin-right: 10px;
  }

  >span:nth-of-type(2){
    font-size: 30px;
    font-weight: 500;
    color: rgb(208, 1, 27);
    margin-right: 15px;
  }
`;

export const ContainerDiscountProduct = styled.div`
  display: flex;
  background-color: red;
  border-radius: 2px;
  padding: 2px 4px;

  >span {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
  }
`;

interface ContainerCoinsMainProps {
  $index: number;
}

export const ContainerCoinsInsuranceColorMain = styled.div<ContainerCoinsMainProps>`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  >h1 {
    font-size: 15px;
    font-weight: 400;
    color: rgb(117, 117, 117);

    width: 115px;
  }
`;

export const ContainerCreditCard = styled.div<ContainerCoinsMainProps>`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  >h1 {
    font-size: 15px;
    font-weight: 400;
    color: rgb(117, 117, 117);

    width: 115px;
  }
`;

export const ContainerOptionsMain = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  >h1 {
    font-size: 15px;
    font-weight: 400;
    color: rgb(117, 117, 117);

    width: 115px;
  }
`;

export const ContainerOptionsMainDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  >span:nth-of-type(1) {
    color: rgb(34, 34, 34);
  }
`;

interface ContainerOptionsProps {
  $whichDivOptionsWasClicked: number;
  $divOptions: number;
}

export const ContainerOptions = styled.div<ContainerOptionsProps>`
  display: flex;
  align-items: center;
  border: 1px solid #00000021;
  padding: 8px 9px;
  cursor: pointer;
  position: relative;

  border-color: ${props => props.$whichDivOptionsWasClicked === props.$divOptions && "red"};
  color: ${props => props.$whichDivOptionsWasClicked === props.$divOptions && "red"};

  >img {
    width: 25px;
    height: auto;
    object-fit: cover;
    margin-right: 5px;
  }

  >span {
    font-size: 14px;
  }

  overflow: hidden;

  &:hover {
    border-color: red;
    color: red;
  }

  >div  {
    bottom: 0;
    position: absolute;
    right: 0;
    z-index: 1;

    &::before {
      border: 18px solid transparent;
      border-bottom: 18px solid red;
      bottom: 0;
      content: "";
      position: absolute;
      right: -18px;
      z-index: 1;
    }

    >svg {
      color: #ffffff;
      z-index: 20;
      width: 9px;
      bottom: -1px;
      position: absolute;
      right: 1px;
      display: flex;

      /* background-color: black; */
    }
  }
`;

export const ContainerCreditCardDescription = styled.div`
  display: flex;
  align-items: center;

  >span:nth-of-type(1) {
    color: rgb(34, 34, 34);
  }

  >div{
    cursor: pointer;
    margin-left: 20px;

    >span:nth-of-type(1) {
      color: rgb(0, 85, 170);
      margin-right: 5px;
      font-size: 15px;
    }

    >svg:nth-of-type(1){
      width: 10px;
      height: 10px;
      fill: rgb(0, 85, 170);
    }
  }
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
    /* margin-right: 90px; */
  }
`;

export const ContainerCoinsDescription = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.2;

  >img {
    width: 16px;
    height: 16px;
    object-fit: cover;
    margin-right: 5px;
  }

  >span {
    color: rgb(85, 85, 85);
    margin-right: 15px;
  }

  >svg {
    width: 14px;
    fill: rgb(85 85 85 / 69%);
  }
`;

export const SpanQuantityCoins = styled.span`
  font-size: 15px;
  color: rgb(255, 174, 4);
`;

export const ContainerInsuranceDescription = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.2;

  >span:nth-of-type(1) {
    font-size: 15px;
    color: black;
    margin-right: 20px;
  }

  >span:nth-of-type(2) {
    font-size: 15px;
    color: rgb(0, 136, 255);
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

export const InputCep = styled.input`
  display: flex;

  outline: none;
  height: 40px;
  border: 1px solid rgba(0,0,0,.54);
  padding: 10px;
`;

export const ContainerColorsProductDescription = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #0000001c;
  /* padding: 4px 5px; */
  padding: 8px;

  >span:nth-of-type(1) {
    font-size: 15px;
    font-weight: 400;
    color: #000000b8;
  }

  >img {
    width: 24px;
    height: auto;
  }
`;

export const ContainerVoltagesDescription = styled.div`
  display: flex;
  gap: 5px;
  z-index: 1;
`;

interface ContainerVoltagesProps {
  $whichDivVoltagensWasClicked: number;
  $divVoltagens: number;
}

export const ContainerVoltages = styled.div<ContainerVoltagesProps>`
  display: flex;
  gap: 5px;
  position: relative;

  border: 1px solid #00000024;
  color: #00000094;
  padding: 10px 30px;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    color: red;
    border-color: red;
  }

  >div  {
    bottom: 0;
    position: absolute;
    right: 0;
    z-index: 1;

    &::before {
      border: 18px solid transparent;
      border-bottom: 18px solid red;
      bottom: 0;
      content: "";
      position: absolute;
      right: -18px;
      z-index: 1;
    }

    >svg {
      color: #ffffff;
      z-index: 20;
      width: 9px;
      bottom: -1px;
      position: absolute;
      right: 1px;
      display: flex;

      /* background-color: black; */
    }
  }

  border-color: ${props => props.$whichDivVoltagensWasClicked === props.$divVoltagens && "red"};
  color: ${props => props.$whichDivVoltagensWasClicked === props.$divVoltagens && "red"};
  
`;

export const ContainerQuantityProductDescription = styled.div`
  display: flex;
  align-items: center;
  /* padding: 4px 5px; */
  margin-right: 7px;

  >div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;

    >svg {
      width: 14px;
      height: auto;
      fill: #000000d4;
    }
  }

  >div:nth-of-type(1){
    border: 1px solid #00000024;
    cursor: pointer;
  }

  >div:nth-of-type(2){
    font-size: 16px;
    font-weight: 400;
    color: #000000b8;
    text-align: center;
    width: 50px;
    border-top: 1px solid #00000024;
    border-bottom: 1px solid #00000024;
  }

  >div:nth-of-type(3){
    border: 1px solid #00000024;
    cursor: pointer;
  }
`;

export const ContainerQuantityParts = styled.div`
  display: flex;

  >span {
    font-size: 15px;
    color: #757575;
  }
`;

export const ContainerAllButton = styled.div`
  display: flex;

  >button {
    display: flex;
    align-items: center;
    color: red;
    background: none;
    border: 1px solid red;
    height: 48px;
    padding: 0px 25px;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 15px;

    >svg {
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }

  >button:nth-of-type(1) {
    background-color: rgba(208,1,27,.08);

    &:hover {
      background-color: rgb(208 1 27 / 4%);
    }
  }

  >button:nth-of-type(2) {
    background-color: #d0011b;
    color: white;
    width: 180px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
    }
  }
`;

export const ContainerSvgArrowTop = styled.div`
  display: flex;

  >svg {
    width: 12px;
    transform: rotate(180deg);
  }
`;

interface ContainerSvgArrowShippingProps {
  $wasClickContainerLocationUser: boolean;
}
// svgArrowBottom.style.rotate = svgArrowBottom.style.rotate === '180deg' ? '0deg' : '180deg';
export const ContainerSvgArrowShipping = styled.div<ContainerSvgArrowShippingProps>`
  display: flex;

  >svg {
    width: 12px;
    transform: rotate(180deg);
    transform: ${props => props.$wasClickContainerLocationUser ? "rotate(0deg)" : "rotate(180deg)"};
  }
`;