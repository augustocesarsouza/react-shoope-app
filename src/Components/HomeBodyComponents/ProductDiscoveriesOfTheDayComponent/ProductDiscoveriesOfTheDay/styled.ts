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

export const ContainerProductDiscoveriesOfTheDay = styled.div`
  display: flex;
  flex-direction: column;
  width: 191px;
  border: 1px solid #00000029;
  border-radius: 1px;
  cursor: pointer;
  transition: margin 0.1s ease;

  &:hover {
    border-color: rgb(238, 77, 45);
    /* padding: 0px 1px; */
    margin-top: 2px;
  }
`;

 /* padding: 0px 2px; */

export const ContainerImgs = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  >img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 12px;
  }

  > img:nth-child(2) {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerDiscountProduct = styled.div`
  display: flex;

  position: absolute;
  top: 0px;
  right: 0px;
  background-color: rgb(254, 238, 234);
  color: rgb(238, 77, 45);
  font-size: 12px;
  font-weight: 500;
  padding: 2px 4px;
`;

export const ContainerAdAndSpan = styled.div`
  display: flex;

  position: absolute;
  bottom: 18px;
  right: 3px;
  object-fit: cover;
  background: #797979;
  border-radius: 2px;
  padding: 2px;

  >span {
    font-size: 12px;
    color: #ffffff;
  }
`;

export const ContainerTitleAndPriceSalesProduct = styled.div`
  padding: 8px 7px;
`;

export const ContainerProductDiscoveriesDescribe = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  >span {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const ContainerPriceProductAndSales = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerPriceProduct = styled.div`
  display: flex;
  align-items: center;
  color: rgb(238, 77, 45);

  >span {
    font-size: 12px;
    font-weight: 500;
  }

  >h1 {
    font-size: 16px;
  }
`;

export const ContainerSalesProduct = styled.div`
  display: flex;
  align-items: center;

  >span {
    font-size: 12px;
  }
`;