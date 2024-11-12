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
`;

export const ContainerCategoryProduct = styled.div`
  display: flex;
  margin-top: 15px;
`;

interface ContainerCategoryProps {
  $clickedCategory: boolean;
}

export const ContainerCategory = styled.div<ContainerCategoryProps>`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 68px;
  border-bottom: ${props => props.$clickedCategory ? "4px solid rgb(238, 77, 45)" : "1px solid #00000017"};
  cursor: pointer;

  >span {
    font-size: 16px;
    /* font-weight: 500; */
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

export const ContainerAllProductHourMain = styled.div`
  display: flex;
`;

export const ContainerProductFlashOffer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const ContainerProductHour = styled.div`
  display: flex;
  width: 280px;

  >img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const ContainerInfoAboutProductFlashOffer = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 12px;
  }
`;

export const ContainerDiscountPercentageMain = styled.div`
  display: flex;

  >span {
    font-size: 17px;
    font-weight: 500;
    text-decoration: line-through;
    padding-right: 4px;
    color: rgba(0, 0, 0, 0.26);
  }
`;

export const ContainerDiscountPercentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #ffe97a;
  color: #ec3814;
  border-radius: 1px;

  >h1 {
    font-size: 12px;
  }

  >svg {
    width: 10px;
  }

  >span {
    font-size: 17px;
    font-weight: 500;
  }
`;

//seila