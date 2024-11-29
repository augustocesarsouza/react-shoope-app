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

export const ContainerImageProductAndAllImagePartBottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-right: 30px;
`;

export const ContainerImageProduct = styled.div`
  display: flex;
  width: 450px;
  position: relative;
  margin-bottom: 20px;

  > img:nth-of-type(1){
    width: 100%;
    height: auto;
    object-fit: cover;
    cursor: pointer;
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

// Carosel
export const ContainerCaroselProductFlashSaleAllInfo = styled.div`
  display: flex;
  background-color: white;
  height: 96px;
  position: relative;
  margin-bottom: 20px;
`;

export const ContainerArrowLeft = styled.div`
  position: absolute;
  left: 0px;
  top: 25px;
  width: 24px;
  height: 50%;
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  cursor: pointer;
  background-color: #4241415c;

  >div {
    /* padding: 10px; */
    display: flex;
  }

  >div>svg {
    fill: rgb(255 255 255);
    width: 20px;
    transform: rotate(180deg); /* Rotaciona o SVG em 180 graus */
    transition: transform 0.3s ease; /* Adiciona transição suave */

    /* height: 14px; */
  }
`;

export const ContainerArrowRight = styled.div`
  position: absolute;
  right: 0px;
  top: 25px;
  z-index: 1;
  width: 24px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4241415c;
  /* border-radius: 50%; */
  cursor: pointer;
  
  >div {
    /* padding: 10px; */
    display: flex;
  }

  >div>svg {
    fill: rgb(255 255 255);
    width: 20px;
    /* height: 14px; */
  }
`;

// Carosel

export const ContainerAllImagePartBottom = styled.div`
  display: flex;
  gap: 0px;
  overflow-x: hidden;

  >div {
    display: flex;
  }
`;

interface ImgProductBottomProps {
  $indexImg: number;
  $index: number;
}

export const ImgProductBottom = styled.img<ImgProductBottomProps>`
  width: 100px;
  height: auto;
  object-fit: cover;
  margin-right: 5px;
  cursor: pointer;

  border: ${props => props.$index === props.$indexImg && "2px solid red"};

  &:hover {
    border: 2px solid red;
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

export const ContainerModalAfterClicked = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000042;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  >div {
    display: flex;
    background-color: #fff;
  }
`;