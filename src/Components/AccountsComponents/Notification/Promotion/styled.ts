import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Img = styled.img``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;

  >h1 {
    font-size: 14px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.26);
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ContainerFirstPromotion = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerFirstInnerPromotion = styled.div`
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

export const ContainerTitleAndDescription = styled.div`
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

export const ContainerSecondInnerPromotion = styled.div`
  display: flex;
  justify-content: space-between;
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
  }
`;

export const ContainerImgAndTitleDescription = styled.div`
  display: flex;
`;

export const ContainerSecondImgInner = styled.div`
  display: flex;

  >img {
    width: 100px;
    height: 100px;
  }
`;