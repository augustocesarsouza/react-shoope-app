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

export const ContainerFlexOfferMain = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
  margin-top: 6px;
  position: relative;
`;

export const ContainerFlexOffer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 1200px;
  position: relative;
`;

export const ContainerCategoryProduct = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 20px;
  z-index: 1;
`;

interface ContainerCategoryProps {
  $clickedCategory: boolean;
}

export const ContainerCategory = styled.div<ContainerCategoryProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 68px;
  border-bottom: ${props => props.$clickedCategory ? "4px solid rgb(238, 77, 45)" : "1px solid #00000017"};
  cursor: pointer;

  >span {
    font-size: 16px;
    font-weight: ${props => props.$clickedCategory ? "500" : "400"};;
    text-align: center;
    padding: 14px 10px;
    color: rgb(238, 77, 45);
    color: ${props => props.$clickedCategory ? "rgb(238, 77, 45)" : "black"};

    &:hover {
      color: rgb(238, 77, 45);
    }
  } 

  >svg {
    width: 10px;
    transform: rotate(0deg);
  }
`;

export const ContainerCategoryMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 188px;
  height: 68px;
  border-bottom: '1px solid #00000017';
  cursor: pointer;

  >span {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding: 14px 10px;
    color: 'black';
  } 

  >svg {
    width: 10px;
    transform: rotate(0deg);
  }
`;

export const ContainerItensMoreOfferFlesh = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  right: 23px;
  top: 444px;
  z-index: 10;
  width: 340px;
  border: 1px solid #00000017;
  /* border: 1px solid red; */
  background: #ffffff;
`;

export const ContainerItenMoreOfferFlesh = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 10px;
  cursor: pointer;

  &:hover {
    >h1 {
      color: rgb(238, 77, 45);
    }
  }
  
  >h1 {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #000000;
  }
`;