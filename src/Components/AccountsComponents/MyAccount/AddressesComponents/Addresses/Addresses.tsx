import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import SvgAddresses from '../../SvgMyAccount/SvgAddresses/SvgAddresses';
import SvgPlus from '../../../../Svg/SvgPlus/SvgPlus';
import NewAddressModal from '../NewAddressModal/NewAddressModal';
import { Url } from '../../../../../Utils/Url';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';
import { IUserAddress } from '../../../../InterfaceAll/IUserAddress/IUserAddress';
import ViewAddressUser from '../ViewAddressUser/ViewAddressUser';

const Addresses = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [newAddressModal, setNewAddressModal] = useState(false);
  const [userLogin, setUserLogin] = useState<ObjUser | null>(null);
  const [userAddress, setUserAddress] = useState<IUserAddress | null>(null);

  useEffect(() => {
    if (location.state) {
      const objState = location.state;
      let userLocalStorage = localStorage.getItem('user');

      if (userLocalStorage === null) {
        nav('/login');

        return;
      }

      if (objState.user === null || objState.user === undefined) {
        localStorage.removeItem('user');

        nav('/login');
        return;
      }

      setUserLogin(objState.user);
      getValueAddresses(objState.user);
    }
  }, []);

  const onClickInsertNewAddress = () => {
    setNewAddressModal(true);
  };

  const changeValueNewAddressModal = (value: boolean) => {
    setNewAddressModal(value);
  };

  const getValueAddresses = async (user: ObjUser) => {
    const res = await fetch(`${Url}/public/address/get-address-by-user-id/${user.id}`);

    if (res.status === 200) {
      const json = await res.json();
      let addressData: IUserAddress = json.data;
      setUserAddress(addressData);
    }
  };

  return (
    <Styled.ContainerMain>
      <Styled.ContainerMainAddresses>
        <Styled.H1>Meus endereços</Styled.H1>
        <Styled.ContainerInsertAddressMain>
          <Styled.ContainerInsertAddress onClick={onClickInsertNewAddress}>
            <Styled.ContainerSvgPlus>
              <SvgPlus></SvgPlus>
            </Styled.ContainerSvgPlus>
            <Styled.Span>Inserir novo endereço</Styled.Span>
          </Styled.ContainerInsertAddress>
        </Styled.ContainerInsertAddressMain>
      </Styled.ContainerMainAddresses>

      {userAddress && <ViewAddressUser userAddress={userAddress}></ViewAddressUser>}

      {userAddress === null && (
        <Styled.ContainerSvgThereIsNoAddresses>
          <SvgAddresses></SvgAddresses>
          <Styled.Span>Você ainda não tem endereços.</Styled.Span>
        </Styled.ContainerSvgThereIsNoAddresses>
      )}

      {newAddressModal && userLogin && (
        <NewAddressModal
          userLogin={userLogin}
          changeValueNewAddressModal={changeValueNewAddressModal}
        />
      )}
    </Styled.ContainerMain>
  );
};

export default Addresses;
