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
  height: 100px;
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
    width: 169px;
  }

  >span {
    font-size: 14px;
  }
`;

export const ContainerArrowLeft = styled.div`
  position: absolute;
  left: 0px;
  top: 30px;
  width: 30px;
  height: 30px;
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  >div {
    background-color:  #fff;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 4px 0px black;
  }

  >div>svg {
    fill: #0000008f;
    width: 14px;
    height: 14px;
  }
`;

export const ContainerArrowRight = styled.div`
  position: absolute;
  right: 5px;
  top: 30px;
  z-index: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000061;
  border-radius: 50%;
  
  >div {
    background-color:  #fff;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 4px 0px black;
  }

  >div>svg {
    fill: #0000008f;
    width: 14px;
    height: 14px;
  }
`;