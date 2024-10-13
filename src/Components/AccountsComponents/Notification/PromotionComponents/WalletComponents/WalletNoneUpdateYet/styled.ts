import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Img = styled.img``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  width: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  >h1 {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const ContainerNoneUpdate = styled.div`

  >img {
    width: 100px;
    height: 100px;
  }
`;