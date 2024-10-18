import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Img = styled.img``;

interface ContainerTopicCuponsProps {
  $whichCupon: number;
}

export const ContainerTopicCupons = styled.div<ContainerTopicCuponsProps>`
  width: ${props => props.$whichCupon === 6 ? "200px" : "140px"};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    cursor: pointer;
    /* color: rgb(85, 85, 85); */
    color: black;
    padding: 10px 0px;
  }

  span:nth-child(1){
    color: rgb(238, 77, 45);
    border-bottom: 2px solid rgb(238, 77, 45);
  }
`;