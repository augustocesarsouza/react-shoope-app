import { IUserAddress } from '../../../../InterfaceAll/IUserAddress/IUserAddress';
import * as Styled from './styled';
import { Url } from '../../../../../Utils/Url';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';
import { useNavigate } from 'react-router-dom';

interface ViewAddressUserProps {
  userLogin: ObjUser | null;
  userAddress: IUserAddress[];
  wasClickedEditAddress: (address: IUserAddress) => void;
  wasClickedDeleteAddress: (address: IUserAddress) => Promise<void>;
  updateNewUserAddressDefault: (userAddress: IUserAddress) => void;
  changeValueNewAddressModal: (value: boolean) => void;
}

const ViewAddressUser = ({
  userLogin,
  userAddress,
  wasClickedEditAddress,
  wasClickedDeleteAddress,
  updateNewUserAddressDefault,
  changeValueNewAddressModal,
}: ViewAddressUserProps) => {
  const nav = useNavigate();

  const onClickEditAddress = (address: IUserAddress) => {
    wasClickedEditAddress(address);
  };

  const onClickDeleteAddress = (address: IUserAddress) => {
    wasClickedDeleteAddress(address);
  };

  const onClickSetAsDefault = async (address: IUserAddress) => {
    if (userLogin === null) return;

    let addressUpdateDefault = {
      id: address.id,
      defaultAddress: 1,
    };

    // updateNewUserAddressDefault(address);

    const res = await fetch(`${Url}/address/update-only-default-address`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${userLogin.token}`,
        uid: userLogin.id,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addressUpdateDefault),
    });

    if (res.status === 200) {
      const json = await res.json();
      let address: IUserAddress = json.data;

      updateNewUserAddressDefault(address);
      changeValueNewAddressModal(false);
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
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
                    {el.street}, {el.numberHome}, {el.complement}, {el.neighborhood}
                  </Styled.Span>
                )}
                {!el.complement && (
                  <Styled.Span>
                    {el.street}, {el.numberHome}, {el.neighborhood}
                  </Styled.Span>
                )}
                <Styled.Span>
                  {el.stateCity.split('-')[1].trim()}, {el.stateCity.split('-')[0].trim()},{' '}
                  {el.cep.replace('-', '')}
                </Styled.Span>
              </Styled.ContainerStreetNumberComplementNeighborhood>
              <Styled.ContainerSetAsDefaultButton $defaultAddress={el.defaultAddress}>
                <Styled.Button
                  onClick={el.defaultAddress === 0 ? () => onClickSetAsDefault(el) : undefined}
                >
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
