import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

export const Span = styled.span``;

export const SpanLinkBlue = styled.span`
  color: #488bf1;
`;

export const H1 = styled.h1``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
`;

export const Input = styled.input`
`;

export const ContainerInsertPasswordMain = styled.div`
  margin: 0px 224px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 230px;
  
`;

interface ContainerInsertPasswordProps {
  $showErrorPasswordWrong: boolean | null;
}

export const ContainerInsertPassword = styled.div<ContainerInsertPasswordProps>`
  width: 500px;
  border-bottom: 1px solid #1414141f;
  padding-bottom: 70px;
  user-select: none;

  /* padding: 0px 200px; */
  padding: ${pros => pros.$showErrorPasswordWrong === true && "0px 200px"};

  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

export const ContainerTopInsertPassword = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 30px;

  >h1 {
    font-size: 20px;
    font-weight: 400;
    color: #000000d9;
  }
`;

export const ContainerErrorPasswordError = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 340px;
  border: 1px solid #ff00004a;
  padding-bottom: 12px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 12px;
  border-radius: 2px;
  
  >svg {
    width: 16px;
    height: 16px;
  }

  >span {
    font-size: 14px;
  }
`;

export const ContainerArrowLeft = styled.div`
  display: flex;
  width: 24px;

  >svg {
    fill: rgb(238, 77, 45);
  }
`;

export const ContainerMainInputAndButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerInputPasswordButtonConfirm = styled.div`
  /* display: flex;
  justify-content: flex-end; */
  width: 340px;
  /* margin-left: 50px; */
`;

export const ContainerInputPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #5353533d;
  padding: 0px 10px;

  >input {
    border: none;
    padding: 10px 0px;
    width: 285px;
    border: none;
    outline: none;
  }
`;

export const ContainerSvgEyes = styled.div`
  display: flex;
  width: 20px;
  height: 20px;

  >svg {
    cursor: pointer;
  }
`;

export const ContainerButtonConfirm = styled.div`
  display: flex;
  width: 340px;
  /* margin-left: 50px; */
  
  >button {
    background-color: rgb(238, 77, 45);
    opacity: 0.7;
    width: 100%;
    border: none;
    height: 40px;
    color: #fff;
    border-radius: 3px;
  }
`;

const ldsRingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Estilo do contêiner do loader
export const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid currentColor;
    border-radius: 50%;
    animation: ${ldsRingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
    
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;