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
  margin-bottom: 700px;

  >h1 {
    font-size: 18px;
    font-weight: 400;
    padding: 35px 0px;
  }
`;

export const ContainerAllPropertyProduct = styled.div`
  display: flex;
  line-height: 1.2;
  margin-bottom: 20px;

  >h1 {
    font-size: 15px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
    width: 137px;
    margin-right: 15px;
  }
`;

export const ContainerCategoryFor = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  /* margin-bottom: 40px; */

  >div>span {
    font-size: 14px;
    color: rgb(0, 85, 170);
  }

  >div>svg {
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

export const ContainerQuantityPromotionalStock = styled.div`
  display: flex;

  >span {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const ContainerMark = styled.div`
  display: flex;

  >span {
    font-size: 15px;
    font-weight: 400;
    color: #05a;
  }
`;