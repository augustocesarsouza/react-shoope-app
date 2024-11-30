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

export const ContainerFlashDealsAboutPosition = styled.div`
  display: flex;
  /* position: relative; */
  position: relative;
  width: 100%;
  opacity: 1;
  top: 0px;
  z-index: 100;
  background-color: #ffffff;
  transition: opacity 0.3s ease;
`;

export const ContainerDiscoveriesOfTheDayFalse = styled.div`
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: center;
  border-bottom: none;
  height: 60px;
  margin-bottom: 20px;
`;

export const ContainerFlashDealsMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 10px;
  width: 100%;
  position: relative;
`;

export const ContainerFlashDealsHeader = styled.div`
  display: flex;
  margin-right: 10px;
  
  &::before {
    margin-right: 14px;
    right: 67%;
    border-bottom: 1px solid rgba(0, 0, 0, .6);
    content: "";
    position: absolute;
    top: 50%;
    width: 20px;
  }
`;

export const ContainerFlashDealsImg = styled.div`
  width: 185px;
  display: flex;

  >img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  gap: 4px;

  &::after {
    left: 68%;
    margin-left: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, .6);
    content: "";
    position: absolute;
    top: 50%;
    width: 20px;
  }
`;

export const DigitBox = styled.div`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 2px 5px;
  border-radius: 4px;
`;

export const ContainerFinishIn = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 125px;

  >h1 {
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
    color: #0000009e;
  }
`;

export const ContainerChronometer = styled.div`
  display: flex;
  width: 17px;
  height: 17px;

  >img {
    width: 100%;
    height: auto;;
    /* height: 48px; */
    object-fit: cover;
  }
`;