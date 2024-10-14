import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

interface SpanProps {
  $spanNumber: string;
  $whichWasClicked: string;
}

export const SpanForItensMyAccount = styled.span<SpanProps>`
  /* color: #ee4d2d; */
  color: ${props => props.$spanNumber === props.$whichWasClicked && "#ee4d2d"};

`;

export const ContainerMain = styled.div``;

export const ContainerAccountUserMain = styled.div`
  /* display: flex;
  gap: 50px;
  margin-left: 226px;
  margin-right: 226px;
  padding: 50px 0px; */

  display: flex;
  justify-content: center;
  margin-bottom: 21px;
  margin-top: 55px;
`;

export const ContainerAccountUser = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin: 0px 0px;
  width: 1200px;
  font-size: 13px;
  font-weight: 300;
`;

export const containerAccountUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 180px;
  margin-right: 20px;
`;

export const ContainerUserNameImg = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 30px;
`;

export const ContainerImgUser = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  margin-right: 5px;

  svg {
    width: 15px;
    height: 15px;
    fill: #fff;

    stroke: #c6c6c6;
    font-size: 1.5rem;
    font-weight: 400;
    left: 50%;
    line-height: 2rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-font-smoothing: antialiased;
  }
`;

export const ContainerUserName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContainerInfoProfileUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const ContainerMyAccountMain = styled.div`
`;

interface ContainerMyAccountProps {
  $whichWasClickedFirstLayer: string;
}

export const ContainerMyAccount = styled.div<ContainerMyAccountProps>`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  user-select: none;
  /* background-color: ${props => props.$whichWasClickedFirstLayer === '1' && "red"}; */

  >img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  >span {
    font-size: 14px;
    font-weight: 500;

    color: ${props => props.$whichWasClickedFirstLayer === '2' && "#ee4d2d"};
    color: ${props => props.$whichWasClickedFirstLayer === '3' && "#ee4d2d"};
    color: ${props => props.$whichWasClickedFirstLayer === '4' && "#ee4d2d"};
    color: ${props => props.$whichWasClickedFirstLayer === '5' && "#ee4d2d"};
  }

  &:hover {
    >span {
      color: rgb(238, 77, 45);
    }
  }
`;

interface ContainerItensMyAccountProps {
  $accountDelete: boolean;
}

export const ContainerItensMyAccount = styled.div<ContainerItensMyAccountProps>`
  /* display: flex; */
  display: ${props => props.$accountDelete ? "none" : "flex"};
  flex-direction: column;
  gap: 10px;

  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  padding-left: 27px;
  padding-top: 13px;
  padding-bottom: 7px;
  width: 150px;

  >span {
    cursor: pointer;
    
    &:hover {
      color: #ee4d2d;

    }
  }
`;