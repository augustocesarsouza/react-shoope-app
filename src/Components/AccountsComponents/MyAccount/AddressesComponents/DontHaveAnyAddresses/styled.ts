import styled from 'styled-components';

export const Container = styled.div``;

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Button = styled.button``;

export const ContainerSvgThereIsNoAddresses = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 500px;

  >svg {
    width: 120px;
    height: 120px;
  }

  >span {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0,0,0,.65);
  }
`;