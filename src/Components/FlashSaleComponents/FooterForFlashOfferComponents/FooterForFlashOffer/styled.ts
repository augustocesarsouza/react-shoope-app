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
  flex-direction: column;
`;

export const ContainerFirstPart = styled.div`
  display: flex;
  font-size: 14px;
  gap: 3px;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 35px;

  >span:nth-child(1){
    text-decoration: underline;
  }
`;

export const ContainerSecondPart = styled.div`
  display: flex;
  flex-direction: column;
  /* font-size: 14px; */
  margin-bottom: 25px;

  >h1 {
    font-size: 22px;
    color: #ee4d2d;
    margin-bottom: 20px;
  }

  >span {
    font-size: 15px;
  }

  >span:nth-child(2) {
    margin-bottom: 15px;
  }
`;

export const ContainerThirdPart = styled.div`
  display: flex;
  flex-direction: column;
  /* font-size: 14px; */
  border-bottom: 1px solid #00000021;
  padding-bottom: 60px;
  
  >h1 {
    font-size: 22px;
    color: #ee4d2d;
    margin-bottom: 20px;
  }

  >span {
    font-size: 15px;
  }

  >span:nth-child(2) {
    margin-bottom: 15px;
  }
`;

export const ContainerUl = styled.div`
  display: flex;
  flex-direction: column;

  >span:nth-child(1) {
    font-size: 15px;
    color: #000000;
    font-weight: 600;
  }
  /* font-size: 14px; */
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-top: 15px;
`;

export const Li = styled.li`
  font-size: 15px;
  text-decoration: underline;
  color: #000000cf;

  margin-bottom: 15px;
`;