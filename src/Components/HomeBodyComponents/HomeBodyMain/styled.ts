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
  display: flex;
  justify-content: center;
  margin: 21px 0px;
  position: relative;
`;

export const ContainerWithForAll = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px;
  width: 1200px;
`;

export const ContainerTipsForUsingCoupons = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;

  >img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerDiscoveriesOfTheDayMain = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ContainerDiscoveriesOfTheDayProps {
  $isOutOfView: boolean;
  $valueWidthContainerDiscoveriesOfTheDay: string;
}

export const ContainerDiscoveriesOfTheDay = styled.div<ContainerDiscoveriesOfTheDayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid rgb(238, 77, 45);
  height: 60px;
  margin-bottom: 20px;
  user-select: none;

  position: ${props => props.$isOutOfView ? "fixed" : "block"};
  top: 0px;
  width: ${props => props.$isOutOfView ? props.$valueWidthContainerDiscoveriesOfTheDay : "100%"};
  z-index: 100;
  background-color: #ffffff;
  opacity: ${props => props.$isOutOfView ? 0.9 : 1}; /* Muda a opacidade ao entrar/ sair */
  transition: opacity 0.3s ease;

  >h1 {
    font-size: 16px;
    color: rgb(238, 77, 45);
    text-align: center;
  }
`;

export const ContainerDiscoveriesOfTheDayFalse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: none;
  height: 60px;
  margin-bottom: 20px;
`;

export const ContainerAllProductDiscoveriesOfTheDay = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ContainerEndButtonSeeMore = styled.div`
  /* margin-top: 70px; */
  margin-top: 30px;
  margin-bottom: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;

  >button {
    color: #555;
    border: 1px solid #0000000a;
    height: 40px;
    width: 390px;
    cursor: pointer;

    &:hover {
      border-color: #00000022;
    }
  }
`;