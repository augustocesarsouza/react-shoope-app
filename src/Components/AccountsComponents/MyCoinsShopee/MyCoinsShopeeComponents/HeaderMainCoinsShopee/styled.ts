import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Img = styled.img``;

export const ContainerHeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerFirstHeader = styled.div`
  display: flex;
  align-items: center;

  >h1 {
    color: rgb(246, 167, 0);
    margin-right: 10px;
  }
`;

export const ContainerImgCoins = styled.div`
  display: flex;
  width: 48px;
  margin-right: 15px;

  >img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContainerInfoInnerHeader = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`;

export const ContainerSpanAndSvgQuestionMark = styled.div`
  display: flex;
  align-items: center;

  >span {
    font-size: 16px;
    font-weight: 400;
    margin-right: 10px;
    color: rgb(246, 167, 0);
  }

  >svg {
    width: 12px;
    height: 12px;
    fill: #00000087;
  }
`;

export const ContainerSpanAndSvgArrowRight = styled.div`
  display: flex;
  align-items: center;

  >span {
    font-size: 14px;
    font-weight: 300;
    color: rgb(146, 146, 146);
    margin-right: 10px;
  }

  >svg {
    width: 11px;
    height: 11px;
    fill: #00000087;
  }
`;

export const ContainerSecondHeader = styled.div`
  display: flex;
  align-items: center;

  >h1 {
    font-size: 16px;
    font-weight: 400;
    margin-right: 10px;
    color: rgb(246, 167, 0);
  }

  >svg {
    width: 10px;
    height: 10px;
    fill: rgb(246, 167, 0);
  }
`;