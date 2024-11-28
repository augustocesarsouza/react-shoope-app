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

export const ContainerFlashDealsMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  background-image: url(https://res.cloudinary.com/dyqsqg7pk/image/upload/v1732795415/img-flash-deals/4323ad4dc2b3c72d0474_qcsi5x.jpg), linear-gradient(-90deg, #f0451e 9%, #f32424 96%);
  color: #fff;
  height: 36px;
  margin-top: 10px;
  padding: 0 20px;
`;

export const ContainerFlashDealsHeader = styled.div`
  display: flex;
  margin-right: 10px;

  >svg {
    width: 121px;
    height: 21px;
  }
`;

export const ContainerFinishInAndChronometer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerFinishIn = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 125px;

  >h1 {
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
    color: white;
  }
`;

export const ContainerChronometer = styled.div`
  display: flex;
  width: 17px;
  height: 17px;

  >svg {
    width: 100%;
    height: auto;
    fill: red;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const DigitBox = styled.div`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 2px 5px;
  border-radius: 4px;
`;