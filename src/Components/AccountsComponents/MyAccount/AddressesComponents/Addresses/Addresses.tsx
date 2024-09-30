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
    setClickedEditAddress(null);
    setNewAddressModal(true);
  };

  const changeValueNewAddressModal = (value: boolean) => {
    setNewAddressModal(value);
  };

  const getValueAddresses = async (user: ObjUser) => {
    const res = await fetch(`${Url}/public/address/get-address-by-user-id/${user.id}`);

    if (res.status === 200) {
      const json = await res.json();
      let addressData: IUserAddress[] = json.data;

      if (addressData === undefined) {
        setUserAddress(null);
      } else {
        setUserAddress(addressData);
      }
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
    if (address === null) return;

    const res = await fetch(`${Url}/public/address/delete/${address.id}`, {
      method: 'DELETE',
    });

    if (res.status === 200) {
      const json = await res.json();

      setUserAddress((prev) => {
        if (prev) {
          return prev.filter((item) => item.id !== address.id);
        }

        return prev;
      });
    }
  };

  return (
    <Styled.ContainerMain>
      <HeaderAddress onClickInsertNewAddress={onClickInsertNewAddress} />

      {userAddress && (
        <ViewAddressUser
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
