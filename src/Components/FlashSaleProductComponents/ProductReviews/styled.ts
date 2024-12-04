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
  display: flex;
  flex-direction: column;
  margin-bottom: 700px;

  >h1 {
    font-size: 18px;
    font-weight: 500;
    color: #000000c7;
    margin-bottom: 20px;
  }
`;

export const ContainerRateAvaliationAndStarsAndSelectWhichStar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerRateAvaliationAndStarsMain = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const ContainerRateAvaliationAndStars = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.1;
  margin-right: 55px;

  >span:nth-of-type(1){
    font-size: 30px;
    font-weight: 500;
    color: red;
    margin-right: 5px;

    >span {
      font-size: 18px;
      color: #ff0000cf;
    }
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

export const ContainerStarImgFull = styled.div`
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/44c46951c46c5a5e8129.svg);
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
`;

export const ContainerStarImg = styled.div`
  background-image: url(https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/2a44ed8141cd3a3ed0c9.svg);
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
`;

export const ContainerSelectWhichStar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 0fr);
  gap: 10px;

  >div:nth-of-type(7) {
    width: 170px;
  }
`;

interface ContainerStarEachProps {
  $whichStarWasClicked: number;
  $whichContainerStarItIs: number;
}

export const ContainerStarEach = styled.div<ContainerStarEachProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  border: 1px solid rgba(0, 0, 0, .09);
  width: 115px;
  height: 32px;
  cursor: pointer;
  
  border-color: ${props => props.$whichStarWasClicked === props.$whichContainerStarItIs ? "red" : "rgba(0, 0, 0, .09)"};

  >span {
    /* color: red; */
    color: rgba(0, 0, 0, .87);
    font-size: 14px;
    line-height: 1;
    width: 100%;
    text-align: center;
    color: ${props => props.$whichStarWasClicked === props.$whichContainerStarItIs ? "red" : "black"};
  }
`;

export const ContainerReviews = styled.div`
  display: flex;
  flex-direction: column;
`;