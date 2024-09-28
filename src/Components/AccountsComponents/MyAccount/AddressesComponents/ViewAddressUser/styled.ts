import styled from'styled-components';

export const Container = styled.div``;

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Button = styled.button``;

export const ContainerAddressUserMain = styled.div`
  display: flex;
  flex-direction: column;

  >span {
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 20px;
  }
`;

interface ContainerAddressUserDetailsProps {
  $index: number;
  $userAddressLength: number;
}

export const ContainerAddressUserDetails = styled.div<ContainerAddressUserDetailsProps>`
  margin-bottom: 20px;
  padding-bottom: 20px;
  /* border-bottom: 1px solid red; */
  border-bottom: ${props => props.$index < props.$userAddressLength && '1px solid #04040426'};
  /* index */
`;

export const ContainerNameAndPhoneNumberAndButtonEditDelete = styled.div`
  display: flex; 
  justify-content: space-between;
  padding-bottom: 5px;
`;

export const ContainerNameAndPhoneNumber = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;

  span:nth-child(1) {
    font-size: 16px;
    font-weight: 500;
  }

  >div {
    border-left: 1px solid rgba(0, 0, 0, .26);
    margin: 0 8px;
    height: 25px;
  }

  span:nth-child(3) {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const ContainerButton = styled.div`
  display: flex; 
  align-items: center;
  gap: 8px;

  >button {
    font-size: 14px;
    font-weight: 400;
    border: none;
    color: #08f;
    cursor: pointer;
  }
`;

export const ContainerStreetNumberComplementNeighborhoodAndSetAsDefault = styled.div`
  display: flex; 
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const ContainerStreetNumberComplementNeighborhood = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.54);
  display: flex; 
  flex-direction: column;
  gap: 2px;
`;

interface ContainerSetAsDefaultButtonProps {
  $defaultAddress: number;
}

export const ContainerSetAsDefaultButton = styled.div<ContainerSetAsDefaultButtonProps>`
  display: flex; 

  >button {
    padding: 0px 10px;
    height: 28px;
    border-radius: 4px;

    border: 1px solid ${props => props.$defaultAddress === 1 ? "rgb(143 143 143 / 22%)" : props => props.$defaultAddress === 0 && "rgb(143 143 143 / 47%)"};
    
    color: ${props => props.$defaultAddress === 1 && "rgb(143 143 143 / 71%)"};
    color: ${props => props.$defaultAddress === 0 && "#000000bd"};

    cursor: ${props => props.$defaultAddress === 1 && "not-allowed"};
    cursor: ${props => props.$defaultAddress === 0 && "pointer"};
  }
`;

export const ContainerButtonStandard = styled.div`
  display: flex; 

  >button {
    border: 1px solid #ff0000c7;
    color: #ff0000c7;
    padding: 3px;
  }
`;