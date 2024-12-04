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
`;

export const ContainerComments = styled.div`
  display: flex;

  >span {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    line-height: 1.4;
  }
`;