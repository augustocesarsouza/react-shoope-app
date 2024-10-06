import styled from 'styled-components';


export const ContainerPayment = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 15px;

  }

  >span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const H1 = styled.h1`

`;

export const Span = styled.span`

`;

export const ContainerImgPayment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 240px;
  gap: 5px;
`;

export const ContainerImg = styled.div`
  width: 60px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 28%);
  box-sizing: border-box;

  >img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;