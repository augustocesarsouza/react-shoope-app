import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect } from 'react';
import WalletNoneUpdateYet from '../WalletNoneUpdateYet/WalletNoneUpdateYet';
import { GetUserFromLocalStorage } from '../../../../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';

const Wallet = () => {
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    if (location.state) {
      const objState = location.state;

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

      if (objState.user === null || objState.user === undefined) {
        localStorage.removeItem('user');

        nav('/login');
        return;
      }

      // getPromotionUser(objState.user);
    }
  }, []);

  return (
    <>
      <WalletNoneUpdateYet />
    </>
  );
};

export default Wallet;
