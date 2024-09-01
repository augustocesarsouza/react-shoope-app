import { styled } from 'styled-components';

export const ContainerStepOneMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
`;

export const ContainerHeaderCreateAccount = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 60px;
  /* position: relative; */
`;

interface ContainerFirstBallProps {
  $colorgreen: boolean;
}

export const ContainerFirstBall = styled.div<ContainerFirstBallProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  
  >div{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    /* background-color: #38af3c; */
    background-color: ${props => props.$colorgreen ? "#38af3c" : "#fff"};
    border: ${props => props.$colorgreen ? "none" : "1px solid rgba(0,0,0,.26)"};
    display: flex;
    align-items: center;
    justify-content: center;

    >span {
      font-size: 14px;
      /* color: #fff; */
      color: ${props => props.$colorgreen ? "#fff" : "rgba(0,0,0,.26)"};
    }

    >svg {
      /* color: #fff; */
      color: ${props => props.$colorgreen ? "#fff" : "rgba(0,0,0,.26)"};
    }
  }

  >span {
    font-size: 12px;
    /* color: #38af3c; */
    color: ${props => props.$colorgreen ? "#38af3c" : "rgba(0,0,0,.26)"};
  }
`;

export const Container = styled.div`

`;

export const Span = styled.span`

`;

export const ContainerArrow = styled.div`
  background-color: rgba(0, 0, 0, .26);
  top: 15px;
  height: 1px;
  position: relative;
  width: 85px;

  &::after {
    border-right: .0625rem solid rgba(0, 0, 0, .26);
    border-top: .0625rem solid rgba(0, 0, 0, .26);
    box-sizing: border-box;
    content: "";
    display: block;
    height: 5px;
    position: absolute;
    right: 0;
    top: -2px;
    transform: rotate(45deg);
    width: 5px;
  }
`;