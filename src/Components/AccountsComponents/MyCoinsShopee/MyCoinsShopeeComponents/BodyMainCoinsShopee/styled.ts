import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Img = styled.img``;

export const ContainerBodyMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 0px 368px 0px;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  >span {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  >button {
    border: none;
    background-color: #F44336;
    color: #fff;
    padding: 12px 18px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: #f45549;
      color: #dbdbdb;
    }
  }
`;