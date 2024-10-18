import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Img = styled.img``;

export const ContainerInputAddCupon = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 150px;

  >span {
    font-size: 16px;
    font-weight: 500;
    margin-right: 10px;
  }
`;

export const ContainerInputInsertCodeCupon = styled.div`
  display: flex;
  padding: 13px;
  border: 1px solid #2b2b2b63;
  border-radius: 2px;
  width: 414px;

  >input {
    border: none;
    width: 100%;

    &:focus {
      outline: none
    }

    &::placeholder {
      color: #2b2b2b63;
    } 
  }
`;

export const ContainerSvgExit = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ContainerButtonRescue = styled.div`
  display: flex;
  height: 100%;
  margin-left: 10px;

  >button {
    border: none;
    background-color: rgba(0,0,0,.1);
    color: #fff;
    padding: 0px 20px;
  }
`;