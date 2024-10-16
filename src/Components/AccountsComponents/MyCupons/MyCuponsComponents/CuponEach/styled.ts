import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Img = styled.img``;

export const ContainerCuponMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 448px;
  border: 1px solid #0000002b;
  padding: 10px;
  border-radius: 6px;
  position: relative;
  
  /* Adicionando as bordas recortadas com pseudo-elementos */
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 17px;
    background-color: white; /* A mesma cor do fundo */
    border: 1px solid #0000002b;
    top: 69%;
    transform: translateY(-50%);
  }

  &::before {
    left: -1px; /* Ajusta o recorte do lado esquerdo */
    border-radius: 10px 0 0 10px;
    transform: translateY(-50%) rotate(180deg);
    border-right: 1px solid #00000000;
  }

  &::after {
    right: -1px; /* Ajusta o recorte do lado direito */
    border-radius: 0 10px 10px 0;
    transform: translateY(-50%) rotate(180deg);
    border-left: 1px solid #00000000;
  }
`;

export const ContainerCuponHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  width: 100%;
`;

export const ContainerImgHeader = styled.div`
  display: flex;
  width: 74px;
  position: relative;

  >img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ContainerTitleDescriptionCupon = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  gap: 8px;

  >span {
    font-size: 12px;
    font-weight: 400;
  }

  > span:nth-child(3) {
    color: #000000a3;
  }

  >h1 {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const ContainerImgExclusive = styled.div`
  display: flex;

  position: absolute;
  right: 6px;
  bottom: 0px;
  width: 60px;

  >img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 50%; */
  }
`;

export const ContainerBorder = styled.div`
  display: flex;
  width: 95%;
  height: 10px;
  border-top: 2px dashed #0000002b;
`;

export const ContainerCuponFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:  center;
  /* border-top: 2px dashed #0000002b; */
  padding-top: 4px;
  width: 100%;
`;

export const ContainerCuponBottomFirst = styled.div`
  display: flex;
  gap: 10px;

  >span {
    font-size: 12px;
  }

  > span:nth-child(1) {
    color: rgb(255, 66, 79);
    font-weight: 400;

  }

  > span:nth-child(2) {
    color: rgb(80, 139, 227);
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: rgb(115 160 227);
    }
  }
`;

export const ContainerCuponBottomSecond = styled.div`
  display: flex;
  gap: 10px;

  >button {
    font-size: 14px;
    font-weight: 400;
    color: rgb(238, 77, 45);
    border: 1px solid rgb(238, 77, 45);
    padding: 2px 24px;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
      color: rgb(238 116 91);
      border-color: rgb(238 116 91);
    }
  }
`;

export const ContainerQuantityCupons = styled.div`
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  width: 100%;

  >div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    background: #0000001f;
    border-radius: 2px;
    padding: 2px 0px;
  }

  >div>span {
    font-size: 12px;
    font-weight: 500;
    color: red;
    line-height: 1;
  }

  >div>svg {
    width: 7px;
    height: 10px;
  }
`;

export const ContainerSvgQuantityX = styled.div`
`;