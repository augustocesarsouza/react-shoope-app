import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Img = styled.img``;

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 950px;
  gap: 10px;

  >h1 {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const ContainerImgNoOrderUpdate = styled.div`
  display: flex;

  >img {
    width: 100px;
    height: 100px;
  }
`;
