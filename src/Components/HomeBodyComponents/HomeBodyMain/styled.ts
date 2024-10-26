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
  justify-content: center;
  margin: 21px 0px;
  position: relative;
`;

export const ContainerWithForAll = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px;
  width: 1200px;
`;

export const ContainerTipsForUsingCoupons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;

  >img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerCategorys = styled.div`
  display: flex;
  flex-direction: column;
  
  >h1 {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0,0,0,.54);
    margin-bottom: 50px;
  }

  margin-bottom: 150px;
`;

export const ContainerAllCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerCategoryProp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 120px;
  

  >img {
    width: 83px;
    height: auto;
  }

  >span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    width: 90px;
    text-align: center;
  }
`;