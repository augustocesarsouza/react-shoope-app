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

export const ContainerTopicsMyCupons = styled.div`
  display: flex;
  align-items: center;

  div>span {
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: rgb(85, 85, 85);
    padding: 10px 0px;
  }

  div:nth-child(1) > span:nth-child(1){
    color: rgb(238, 77, 45);
    border-bottom: 2px solid rgb(238, 77, 45);
  }
`;

export const ContainerCuponsFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 50px;
`;

interface ContainerTopicCuponsProps {
  $whichCupon: number;
}

export const ContainerTopicCupons = styled.div<ContainerTopicCuponsProps>`
  width: ${props => props.$whichCupon === 6 ? "200px" : "140px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerCuponsRecommended = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 50px;
  }
`;

export const ContainerCuponsRecommendedItem = styled.div`
  display: flex;
  gap: 10px;
`;