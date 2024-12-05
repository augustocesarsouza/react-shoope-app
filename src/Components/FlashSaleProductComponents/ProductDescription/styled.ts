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
  display: none;
  margin-bottom: 30px;
`;
  
export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 50px;
  }

  >span {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export const ContainerCharacteristics = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 25px;
    color: #000000cf;
  }

  >span {
    font-size: 15px;
    font-weight: 400;
    color: #000000cf;
    margin-bottom: 30px;
  }
`;