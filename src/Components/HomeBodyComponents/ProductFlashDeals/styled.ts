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

export const ContainerFlashDealsHeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const ContainerAllProductFlashDeals = styled.div`
  display: flex;
  position: relative;
`;

export const ContainerProductImgFlashInfo = styled.div`
  display: flex;
  gap: 30px;

  overflow-x: hidden;

  >div {
    cursor: pointer;
  }
`;

export const ContainerArrowLeft = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 80px;
  height: 100%;
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
 

  >div {
    background-color:  #fff;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 4px 0px black;
  }

  >div>svg {
    fill: #0000008f;
    width: 14px;
    height: 14px;
  }
`;

export const ContainerArrowRight = styled.div`
  position: absolute;
  right: 0px;
  top: 79px;
  z-index: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000061;
  border-radius: 50%;
  
  >div {
    background-color:  #fff;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 4px 0px black;
  }

  >div>svg {
    fill: #0000008f;
    width: 14px;
    height: 14px;
  }
`;