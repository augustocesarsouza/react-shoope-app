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