import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Img = styled.img``;

export const Button = styled.button``;

export const ContainerSecondInnerPromotion = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerImgAndTitleDescription = styled.div`
  display: flex;
`;

export const ContainerImgInner = styled.div`
  display: flex;
  margin-right: 20px;

  >img {
    width: 80px;
    height: 80px;
  }
`;

export const ContainerSecondTitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  >h1 {
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 5px;
  }
  
  >span {
    font-size: 14px;
    font-weight: 400;
    color: #0000007d;
    margin-bottom: 10px;
  }
`;

export const ContainerSecondImgInner = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 10px;

  >img {
    width: 100px;
    height: 100px;
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
