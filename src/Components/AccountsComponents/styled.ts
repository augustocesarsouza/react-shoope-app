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
  display: flex;
  gap: 50px;
  /* padding: 40px 100px; */
  margin-left: 226px;
  margin-right: 226px;
  padding: 50px 0px;
`;

export const containerAccountUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 180px;
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

export const ContainerMyAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  >img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  >span {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const ContainerItensMyAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  padding-left: 27px;
  padding-top: 13px;
  padding-bottom: 7px;

  >span {
    cursor: pointer;
    
    &:hover {
      color: #ee4d2d;

    }
  }
`;