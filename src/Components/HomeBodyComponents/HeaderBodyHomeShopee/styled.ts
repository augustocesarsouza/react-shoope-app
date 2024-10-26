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

export const ContainerFirst = styled.div`
  /* display: flex;
  justify-content: space-between;
  margin: 0px 0px;
  width: 1200px; */
  font-size: 13px;
  font-weight: 300;
  /* position: relative; */
`;

export const ContainerFirstImagesMain = styled.div`
  display: flex;
  gap: 7px;
  position: relative;
`;

export const ContainerFirstImages = styled.div`
  display: flex;
  overflow-x: hidden; /* Mostra apenas uma imagem de cada vez */
  scroll-behavior: smooth;
  width: 800px; /* Limita a largura do container para o tamanho de uma imagem */
  position: relative;
  cursor: pointer;
`;

export const ContainerImgsTop = styled.div`
  display: inline-block;
  width: 800px; /* Define a largura de cada imagem */
  flex-shrink: 0; /* Garante que as imagens não encolham */

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerQuantityImg = styled.div`
  display: flex;
  position: absolute;
  bottom: 15px;
  left: 370px;
  gap: 8px;
`;

interface ContainerBallProps {
  $whichImageIs: number;
}

export const ContainerBall = styled.div<ContainerBallProps>`
  display: flex;
  background-color: ${props => props.$whichImageIs === 0 && "#ff5722"};
  background-color: ${props => props.$whichImageIs === 1 && "#ff5722"};
  background-color: ${props => props.$whichImageIs === 2 && "#ff5722"};
  background-color: ${props => props.$whichImageIs === 3 && "#ff5722"};
  background-color: ${props => props.$whichImageIs === -1 && "#d7d7d7"};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 0px rgb(0 0 0);
`;

export const ButtonNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #00000040;
  border: none;
  cursor: pointer;
  padding: 15px 10px;
  font-size: 20px;
  z-index: 1;
  display: flex;

  /* &:hover {
    background-color: rgba(255, 255, 255, 1);
  } */

  >svg {
    width: 10px;
    fill: #fff;
  }
`;

export const ButtonNavLeft = styled(ButtonNav)`
  left: 10px;
`;

export const ButtonNavRight = styled(ButtonNav)`
  right: 400px;
`;

export const ContainerSecondImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerSecondImgTop = styled.div`
  display: flex;
  width: 390px;

  > img {
    width: 100%;
    /* height: auto; */
    height: 115px;
    object-fit: cover;
  }
`;
