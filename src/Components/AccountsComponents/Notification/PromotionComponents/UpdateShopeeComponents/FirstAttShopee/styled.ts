import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Img = styled.img``;

export const Button = styled.button``;

interface ContainerFirstPromotionProps {
  $firstAttShopeeNumber: number;
}

export const ContainerFirstPromotion = styled.div<ContainerFirstPromotionProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-bottom: ${props => props.$firstAttShopeeNumber === 5 && "20px"};
`;

export const ContainerFirstInnerPromotion = styled.div`
  display: flex;
  width: 85%;
`;

export const ContainerImgInner = styled.div`
  display: flex;
  margin-right: 20px;

  >img {
    width: 80px;
    height: 80px;
  }
`;

export const ContainerTitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  /* width: 80%; */

  >h1 {
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 5px;
  }
  
  >span {
    font-size: 14px;
    font-weight: 400;
    color: #0000007d;
  }
`;

export const ContainerButtonDetail = styled.div`
  /* display: flex; */

  >button {
    font-size: 12px;
    border: 1px solid #1010104a;
    padding: 6px;
    color: #00000099;
    cursor: pointer;

    &:hover {
      border-color: red;
      color: red;
    }
  }
`;