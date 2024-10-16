import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Img = styled.img``;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 580px; */
  gap: 15px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  >h1 {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const ContainerSecondSpans = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  >span {
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
  }

  > span:nth-child(1), span:nth-child(2) {
    color: rgb(238, 77, 45);
    border-right: 1px solid red;
    padding-right: 10px;
  }

  > span:nth-child(3){
    color: #000000a8;
  }
`;