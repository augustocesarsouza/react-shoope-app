import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect } from 'react';
import WalletNoneUpdateYet from '../WalletNoneUpdateYet/WalletNoneUpdateYet';

const Wallet = () => {
  const location = useLocation();
  const nav = useNavigate();

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
