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

export const Video = styled.video`
  width: 100%;
  height: 100%;
  background: black;
`;

export const ContainerImgUser = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  
  >img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ContainerUserInfo = styled.div`
  display: flex;
  flex-direction: column;

  >span:nth-of-type(1){
    font-size: 13px;
    margin-bottom: 7px;
  }
`;

export const ContanerSvgWithoutImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #00000012;
  border-radius: 50%;
  margin-right: 20px;

  >svg {
    width: 24px;
    height: 24px;
    stroke: #c6c6c6;
  }
`;

export const ContainerImgAndSvg = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ContainerQuantityStar = styled.div`
  display: flex;
  margin-bottom: 7px;
`;

export const ContainerStarRedSvg = styled.div`
  display: flex;

  >svg {
    width: 14px;
    height: 14px;
    fill: #d0011b;
  }
`;

export const ContainerStarBlackSvg = styled.div`
  display: flex;

  >svg {
    width: 14px;
    height: 14px;
    stroke: red;
    fill: #fff;
  }
`;

export const ContainerSpanDataCration = styled.div`
  display: flex;
  gap: 5px;

  color: rgba(0, 0, 0, .54);
  font-size: 13px;

  margin-bottom: 15px;
`;

export const ContainerComments = styled.div`
  display: flex;
  margin-bottom: 10px;

  >span {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    line-height: 1.4;
  }
`;

export const ContainerImgAndVideoReviews = styled.div`
  display: flex;
  position: relative;

  margin-bottom: 10px;
`;

interface ContainerImgReviewsProps {
  $index: number;
  $indexImg: number | null;
}

export const ContainerImgReviews = styled.div<ContainerImgReviewsProps>`
  display: flex;
  width: 72px;
  height: 72px;
  margin-right: 10px;
  padding: 2px 2px;
  /* border: 2px solid red; */
  border: ${props => props.$index === props.$indexImg && "2px solid red"};

  >img {
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: zoom-in;
  }
`;

export const ContainerVideoReviews = styled.div`
  display: flex;
  gap: 5px;

  width: 516px;
  height: 505px;
  position: relative;
`;

interface ContainerImgVideoReviewsMainProps {
  $index: number;
  $indexImg: number | null;
}

export const ContainerImgVideoReviewsMain = styled.div<ContainerImgVideoReviewsMainProps>`
  display: flex;
  position: relative;

  width: 72px;
  height: 72px;
  margin-right: 10px;

  cursor: zoom-in;
  padding: ${props => props.$index === props.$indexImg && "2px 2px"};
  border: ${props => props.$index === props.$indexImg && "2px solid red"};
`;

interface ContainerImgVideoReviewsProps {
  $imgUrl: string;
}

export const ContainerImgVideoReviews = styled.div<ContainerImgVideoReviewsProps>`
  display: flex;
  width: 100%;
  height: 100%;

  background-image: url(${props => props.$imgUrl});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
 
  >div {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerVideMediaAndMinutes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background: rgba(0,0,0,.54);
  width: 100%;
  padding: 0px 4px;

  >span {
    font-size: 13px;
    color: #fff;
  }
`;

export const ContainerSvgPlayVideo = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 40%;
  top: 35%;
  cursor: pointer;
  
  >svg {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerImageReviews = styled.div`
  display: flex;
  gap: 5px;

  /* width: 516px; */
  height: 505px;
  position: relative;

  >div {
    display: flex;

    >img {
      width: 60%;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const ContainerCostBenefitSimilarToAdMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 8px;
`;

export const ContainerCostBenefitSimilarToAd = styled.div`
  display: flex;

  >span:nth-of-type(1){
    color: rgba(0, 0, 0, 0.4);
    font-size: 15px;

    >span:nth-of-type(1) {
      color: black;
      margin-left: 7px;
    }
  }
`;

export const ContainerLike = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

  >div {
    cursor: pointer;

    >svg {
      fill: rgb(204 204 204);
      margin-right: 5px;
    }

    >span {
      font-size: 14px;
      font-weight: 500;
      color: rgb(204 204 204);
      line-height: 1;
    }
  }
`;