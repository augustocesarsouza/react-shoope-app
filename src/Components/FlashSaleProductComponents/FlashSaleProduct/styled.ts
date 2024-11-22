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

export const ContainerProductWasClickedMain = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
  margin-top: 6px;
`;

export const ContainerProductWasClicked = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 1200px;
`;

export const ContainerProductLayers = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 40px;

  >span {
    font-size: 14px;
    color: rgb(0, 85, 170);
  }

  >svg {
    width: 12px;
    height: 12px;
    fill: #000000a6;

    transform: rotate(270deg);
  }

  >h1 {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const ContainerImageProductAndDescription = styled.div`
  display: flex;
`;

export const ContainerImageProductAndAllImagePartBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

export const ContainerAllImagePartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 460px;
  margin-bottom: 30px;

  >img {
    width: 100px;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerToShareMain = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContainerToShare = styled.div`
  display: flex;
  align-items: center;

  >h1 {
    font-size: 18px;
    font-weight: 400;
  }

  > button {
    border: 0;
    height: 25px;
    margin-left: 5px;
    outline: 0;
    overflow: visible;
    padding: 0;
    position: relative;
    width: 25px;

    /* background-position: 0 0; */
    background-color: initial;
    background-image: url(https://res.cloudinary.com/dyqsqg7pk/image/upload/v1732105018/12f585f9c56d4f30_r9l0vi.png);
    background-size: 100%;
  }

  > button:nth-of-type(1) {
    background-position: 0 -100%;
  }

  > button:nth-of-type(2){
    background-position: 0  0;
  }

  > button:nth-of-type(3){
    background-position: 0 -300%;
  }

  > button:nth-of-type(4){
    background-position: 0 -400%;
  }
`;

export const ContainerFavoriteQuantity = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.1;

  >span {
    font-size: 18px;
    width: 100px;
    text-align: center;
  }
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

export const ContainerImageProduct = styled.div`
  display: flex;
  width: 450px;
  position: relative;

  > img:nth-of-type(1){
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  > img:nth-of-type(2) {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
  }
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
    margin-right: 70px;
    margin-right: ${props => props.$index === 4 && "100px"};
    margin-right: ${props => props.$index === 5 && "60px"};
  }
`;

export const ContainerShippingMain = styled.div`
  display: flex;
  align-items: unset;
  margin-bottom: 25px;

  >h1 {
    font-size: 15px;
    font-weight: 400;
    color: rgb(117, 117, 117);
    margin-right: 90px;
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

export const ContainerLocationUser = styled.div`
  display: flex;
  align-items: center;

  >span:nth-of-type(1){
    font-size: 15px;
    margin-right: 7px;
    font-weight: 500;
  }

  >svg {
    width: 10px;
    transform: rotate(180deg);
  }
`;

export const ContainerShippingPrices = styled.div`
  display: flex;
  align-items: center;

  >span:nth-of-type(1){
    font-size: 15px;
    margin-right: 7px;
    color: rgb(146, 146, 146);
    text-decoration: line-through;
    /* font-weight: 500; */
  }

  >span:nth-of-type(2){
    font-size: 15px;
    margin-right: 7px;
  }

  >svg {
    width: 10px;
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

export const ContainerColorsProductDescription = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #0000001c;
  padding: 4px 5px;

  >span:nth-of-type(1) {
    font-size: 15px;
    font-weight: 400;
    color: #000000b8;
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
  padding: 4px 5px;

  >span:nth-of-type(1) {
    font-size: 15px;
    font-weight: 400;
    color: #000000b8;
  }

  >div {
    padding: 5px;
    border: 1px solid red;
    display: flex;
    align-items: center;

    >svg {
      width: 14px;
      height: auto;
      
    }
  }

`;