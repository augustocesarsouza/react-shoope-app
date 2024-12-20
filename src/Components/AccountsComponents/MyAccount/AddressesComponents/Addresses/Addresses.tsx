import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import NewAddressModal from '../NewAddressModal/NewAddressModal';
import { Url } from '../../../../../Utils/Url';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';
import { IUserAddress } from '../../../../InterfaceAll/IUserAddress/IUserAddress';
import ViewAddressUser from '../ViewAddressUser/ViewAddressUser';
import HeaderAddress from '../HeaderAddress/HeaderAddress';
import DontHaveAnyAddresses from '../DontHaveAnyAddresses/DontHaveAnyAddresses';
import { GetUserFromLocalStorage } from '../../../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';

const Addresses = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [newAddressModal, setNewAddressModal] = useState(false);
  const [userLogin, setUserLogin] = useState<ObjUser | null>(null);
  const [userAddress, setUserAddress] = useState<IUserAddress[] | null>(null);
  const [clickedEditAddress, setClickedEditAddress] = useState<IUserAddress | null>(null);

  useEffect(() => {
    if (location.state) {
      const objState = location.state;

      if (objState.user === null || objState.user === undefined) {
        localStorage.removeItem('user');

        nav('/login');
        return;
      }

      const objUser = GetUserFromLocalStorage();

      if (objUser.isNullUserLocalStorage) {
        nav('/login');
        return;
      }

      if (objUser.user === null) {
        localStorage.removeItem('user');

        nav('/login');
        return;
      }

      setUserLogin(objState.user);
      getValueAddresses(objState.user);
    }
  }, []);

  const onClickInsertNewAddress = () => {
    setClickedEditAddress(null);
    setNewAddressModal(true);
  };

  const changeValueNewAddressModal = (value: boolean) => {
    setNewAddressModal(value);
  };

  const getValueAddresses = async (user: ObjUser) => {
    const res = await fetch(`${Url}/address/get-address-by-user-id/${user.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`,
        uid: user.id,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      const json = await res.json();
      let addressData: IUserAddress[] = json.data;

      if (addressData === undefined) {
        setUserAddress(null);
      } else {
        setUserAddress(addressData);
      }
    }

    if (res.status === 400) {
      //ERROR
    }

    // res.status === 401 -> alguns dos erros é se o token não foi valido a assinatura do token for errado
    // alguma pessoa passar outro token com outra assinatura

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
  };

  const wasClickedEditAddress = (address: IUserAddress) => {
    setClickedEditAddress(address);
    setNewAddressModal(true);
  };

  const createNewUserAddress = (userAddress: IUserAddress) => {
    setUserAddress((prev) => {
      if (prev !== null) {
        let arrayEl = prev.filter((el) => el.id !== userAddress.id);
        arrayEl.push(userAddress);
        return arrayEl;
      }

      return prev;
    });
  };

  const updateNewUserAddressDefault = (userAddress: IUserAddress) => {
    setUserAddress((prev) => {
      if (prev !== null) {
        let objPutFirst: IUserAddress | null = null;

        let arrayNew = prev
          .map((el) => {
            if (el.defaultAddress === 1) {
              return { ...el, defaultAddress: 0 };
            }

            if (el.id === userAddress.id) {
              objPutFirst = { ...el, defaultAddress: 1 };
              return null;
            }
            return el;
          })
          .filter((el) => el !== null);

        if (objPutFirst) {
          let firstObj = arrayNew[0];
          arrayNew[0] = objPutFirst;
          arrayNew.push(firstObj);
        }

        return arrayNew;
      }
      return prev;
    });
  };

  const wasClickedDeleteAddress = async (address: IUserAddress) => {
    if (address === null || userLogin === null) return;

    const res = await fetch(`${Url}/address/delete/${address.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${userLogin.token}`,
        uid: userLogin.id,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      setUserAddress((prev) => {
        if (prev) {
          return prev.filter((item) => item.id !== address.id);
        }

        return prev;
      });
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
    }
  };

  return (
    <Styled.ContainerMain>
      <HeaderAddress onClickInsertNewAddress={onClickInsertNewAddress} />

      {userAddress && (
        <ViewAddressUser
          userLogin={userLogin}
          userAddress={userAddress}
          wasClickedEditAddress={wasClickedEditAddress}
          wasClickedDeleteAddress={wasClickedDeleteAddress}
          updateNewUserAddressDefault={updateNewUserAddressDefault}
          changeValueNewAddressModal={changeValueNewAddressModal}
        />
      )}

      {userAddress && userAddress.length <= 0 && <DontHaveAnyAddresses />}

      {newAddressModal && userLogin && (
        <NewAddressModal
          userLogin={userLogin}
          clickedEditAddress={clickedEditAddress}
          changeValueNewAddressModal={changeValueNewAddressModal}
          createNewUserAddress={createNewUserAddress}
        />
      )}
    </Styled.ContainerMain>
  );
};

export default Addresses;
