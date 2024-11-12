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

export const ContainerFleshOfferEveryDay = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerFleshOfferImg = styled.div`
  height: 240px;

  >img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerhoursFleshOfferMain = styled.div`
  display: flex;
  background-color: #414142;
  height: 64px;
  position: relative;
`;

export const ContainerhoursFleshOffer = styled.div`
  display: flex;
  /* gap: 80px; */
  gap: 0px;
  overflow-x: hidden;
  /* padding-left: 25px; */
  
`;

interface ContainerEachScheduleProps {
  $whatWasItClicked: boolean;
}

export const ContainerEachSchedule = styled.div<ContainerEachScheduleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  /* background: #ee4d2d; */
  background: ${props => props.$whatWasItClicked ? "#ee4d2d" : ""};
  color: ${props => props.$whatWasItClicked ? "white" : "rgb(195, 195, 195)"};
  
  
  >h1 {
    font-size: 24px;
    font-weight: 400;
    width: 171.4px;
    /* width: 160px; */
  }

  >span {
    font-size: 14px;
  }
`;

export const ContainerArrowLeft = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 24px;
  height: 100%;
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  cursor: pointer;
  background-color: #414142;

  >div {
    /* padding: 10px; */
    display: flex;
  }

  >div>svg {
    fill: rgb(211 211 211);
    width: 20px;
    transform: rotate(180deg); /* Rotaciona o SVG em 180 graus */
    transition: transform 0.3s ease; /* Adiciona transição suave */

    /* height: 14px; */
  }
`;

export const ContainerArrowRight = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1;
  width: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #414142;
  /* border-radius: 50%; */
  cursor: pointer;
  background-color: #414142;
  
  >div {
    /* padding: 10px; */
    display: flex;
  }

  >div>svg {
    fill: rgb(211 211 211);
    width: 20px;
    /* height: 14px; */
  }
`;