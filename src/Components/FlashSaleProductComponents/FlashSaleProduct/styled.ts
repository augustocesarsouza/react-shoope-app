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
`;

export const ContainerProductWasClickedMain = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
  margin-top: 6px;
`;

export const ContainerProductWasClicked = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 1200px;
`;

export const ContainerProductLayers = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 40px;

  >span {
    font-size: 14px;
    color: rgb(0, 85, 170);
  }

  >svg {
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

export const ContainerImageProductAndDescription = styled.div`
  display: flex;
`;

export const ContainerImageProductAndAllImagePartBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

export const ContainerAllImagePartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 460px;
  margin-bottom: 30px;

  >img {
    width: 100px;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerToShareMain = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContainerToShare = styled.div`
  display: flex;
  align-items: center;

  >h1 {
    font-size: 18px;
    font-weight: 400;
  }

  > button {
    border: 0;
    height: 25px;
    margin-left: 5px;
    outline: 0;
    overflow: visible;
    padding: 0;
    position: relative;
    width: 25px;

    /* background-position: 0 0; */
    background-color: initial;
    background-image: url(https://res.cloudinary.com/dyqsqg7pk/image/upload/v1732105018/12f585f9c56d4f30_r9l0vi.png);
    background-size: 100%;
  }

  > button:nth-of-type(1) {
    background-position: 0 -100%;
  }

  > button:nth-of-type(2){
    background-position: 0  0;
  }

  > button:nth-of-type(3){
    background-position: 0 -300%;
  }

  > button:nth-of-type(4){
    background-position: 0 -400%;
  }
`;

export const ContainerFavoriteQuantity = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.1;

  >span {
    font-size: 18px;
    width: 100px;
    text-align: center;
  }
`;

export const ContainerProductFlashSaleDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;

  >h1 {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const ContainerImageProduct = styled.div`
  display: flex;
  width: 450px;
  position: relative;

  > img:nth-of-type(1){
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  > img:nth-of-type(2) {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;