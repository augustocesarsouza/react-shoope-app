import { useEffect, useState } from 'react';
import { IUserAddress } from '../../../../InterfaceAll/IUserAddress/IUserAddress';
import * as Styled from './styled';

interface ViewAddressUserProps {
  userAddress: IUserAddress[];
  wasClickedEditAddress: (address: IUserAddress) => void;
  wasClickedDeleteAddress: (address: IUserAddress) => Promise<void>;
}

const ViewAddressUser = ({
  userAddress,
  wasClickedEditAddress,
  wasClickedDeleteAddress,
}: ViewAddressUserProps) => {
  const [cityStateCep, setCityStateCep] = useState('');

  useEffect(() => {
    // let stateCity = userAddress.stateCity;
    // let cep = userAddress.cep.replace('-', '');
    let stateCity = '';
    let cep = '';

    if (stateCity) {
      let city = stateCity.split('-')[1].trim();
      let state = stateCity.split('-')[0].trim();
      let cityState = `${city}, ${state}, ${cep}`;
      setCityStateCep(cityState);
    }
  }, [userAddress]);

  const onClickEditAddress = (address: IUserAddress) => {
    wasClickedEditAddress(address);
  };

  const onClickDeleteAddress = (address: IUserAddress) => {
    wasClickedDeleteAddress(address);
  };

  const onClickSetAsDefault = () => {
    console.log('click');
  };

  return (
    <Styled.ContainerAddressUserMain>
      <Styled.Span>Endereço</Styled.Span>
      <>
        {userAddress.map((el, index) => (
          <Styled.ContainerAddressUserDetails
            key={el.id}
            $index={index + 1}
            $userAddressLength={userAddress.length}
          >
            <Styled.ContainerNameAndPhoneNumberAndButtonEditDelete>
              <Styled.ContainerNameAndPhoneNumber>
                <Styled.Span>{el.fullName}</Styled.Span>
                <Styled.Container></Styled.Container>
                <Styled.Span>{el.phoneNumber}</Styled.Span>
              </Styled.ContainerNameAndPhoneNumber>

              <Styled.ContainerButton>
                <Styled.Button onClick={() => onClickEditAddress(el)}>Editar</Styled.Button>
                {el.defaultAddress === 0 && (
                  <Styled.Button onClick={() => onClickDeleteAddress(el)}>Excluir</Styled.Button>
                )}
              </Styled.ContainerButton>
            </Styled.ContainerNameAndPhoneNumberAndButtonEditDelete>
            <Styled.ContainerStreetNumberComplementNeighborhoodAndSetAsDefault>
              <Styled.ContainerStreetNumberComplementNeighborhood>
                {el.complement && (
                  <Styled.Span>
                    {el.street}, {el.numberHome}, {el.phoneNumber}, {el.complement},{' '}
                    {el.neighborhood}
                  </Styled.Span>
                )}
                {!el.complement && (
                  <Styled.Span>
                    {el.street}, {el.numberHome}, {el.phoneNumber}, {el.neighborhood}
                  </Styled.Span>
                )}
                <Styled.Span>
                  {el.stateCity.split('-')[1].trim()}, {el.stateCity.split('-')[0].trim()},{' '}
                  {el.cep.replace('-', '')}
                </Styled.Span>
              </Styled.ContainerStreetNumberComplementNeighborhood>
              <Styled.ContainerSetAsDefaultButton $defaultAddress={el.defaultAddress}>
                <Styled.Button onClick={el.defaultAddress === 0 ? onClickSetAsDefault : undefined}>
                  Definir como padrão
                </Styled.Button>
              </Styled.ContainerSetAsDefaultButton>
            </Styled.ContainerStreetNumberComplementNeighborhoodAndSetAsDefault>
            {el.defaultAddress === 1 && (
              <Styled.ContainerButtonStandard>
                <Styled.Button>Padrão</Styled.Button>
              </Styled.ContainerButtonStandard>
            )}
          </Styled.ContainerAddressUserDetails>
        ))}
      </>
    </Styled.ContainerAddressUserMain>
  );
};

export default ViewAddressUser;
