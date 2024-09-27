import { useEffect, useState } from 'react';
import { IUserAddress } from '../../../../InterfaceAll/IUserAddress/IUserAddress';
import * as Styled from './styled';

interface ViewAddressUserProps {
  userAddress: IUserAddress;
}

const ViewAddressUser = ({ userAddress }: ViewAddressUserProps) => {
  const [cityStateCep, setCityStateCep] = useState('');

  useEffect(() => {
    let stateCity = userAddress.stateCity;
    let city = stateCity.split('-')[1].trim();
    let state = stateCity.split('-')[0].trim();
    let cep = userAddress.cep.replace('-', '');
    let cityState = `${city}, ${state}, ${cep}`;
    setCityStateCep(cityState);
  }, [userAddress]);

  return (
    <>
      <Styled.ContainerAddressUserMain>
        <Styled.Span>Endereço</Styled.Span>
        <Styled.ContainerAddressUserDetails>
          <Styled.ContainerNameAndPhoneNumberAndButtonEditDelete>
            <Styled.ContainerNameAndPhoneNumber>
              <Styled.Span>{userAddress.fullName}</Styled.Span>
              <Styled.Container></Styled.Container>
              <Styled.Span>{userAddress.phoneNumber}</Styled.Span>
            </Styled.ContainerNameAndPhoneNumber>

            <Styled.ContainerButton>
              <Styled.Button>Editar</Styled.Button>
              <Styled.Button>Excluir</Styled.Button>
            </Styled.ContainerButton>
          </Styled.ContainerNameAndPhoneNumberAndButtonEditDelete>
          <Styled.ContainerStreetNumberComplementNeighborhoodAndSetAsDefault>
            <Styled.ContainerStreetNumberComplementNeighborhood>
              {userAddress.complement && (
                <Styled.Span>
                  {userAddress.street}, {userAddress.phoneNumber}, {userAddress.complement},{' '}
                  {userAddress.neighborhood}
                </Styled.Span>
              )}
              {!userAddress.complement && (
                <Styled.Span>
                  {userAddress.street}, {userAddress.phoneNumber}, {userAddress.neighborhood}
                </Styled.Span>
              )}
              <Styled.Span>{cityStateCep}</Styled.Span>
            </Styled.ContainerStreetNumberComplementNeighborhood>
            <Styled.ContainerSetAsDefaultButton>
              <Styled.Button>Definir como padrão</Styled.Button>
            </Styled.ContainerSetAsDefaultButton>
          </Styled.ContainerStreetNumberComplementNeighborhoodAndSetAsDefault>
          <Styled.ContainerButtonStandard>
            <Styled.Button>Padrão</Styled.Button>
          </Styled.ContainerButtonStandard>
        </Styled.ContainerAddressUserDetails>
      </Styled.ContainerAddressUserMain>
    </>
  );
};

export default ViewAddressUser;
