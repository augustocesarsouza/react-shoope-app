import * as Styled from './style';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '../Home/Home';
import LoginComponentMain from '../../Components/LoginComponents/LoginComponentMain/LoginComponentMain';
import RegisterUserComponentMain from '../../Components/RegisterUserComponents/RegisterUserComponentMain/RegisterUserComponentMain';
import AccountSetting from '../../Components/AccountsComponents/AccountSetting';
import Perfil from '../../Components/AccountsComponents/MyAccount/Perfil/Perfil';
import CardsBankAccounts from '../../Components/AccountsComponents/MyAccount/CardsBankAccounts/CardsBankAccounts';
import InsertEmail from '../../Components/AccountsComponents/MyAccount/InsertEmail/InsertEmail';
import EmailConfirmCode from '../../Components/AccountsComponents/MyAccount/EmailConfirmCode/EmailConfirmCode';

const AppContent = () => {
  document.body.style.overflowY = 'none';

  const location = useLocation();
  useEffect(() => {
    // location.pathname.includes('/filme')
  }, [location]);

  return (
    <Styled.ContainerMain>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/account" element={<AccountSetting />}>
          <Route index element={<Navigate to="profile" />}></Route>
          <Route path="profile" element={<Perfil />} />
          <Route path="payment" element={<CardsBankAccounts />} />
          <Route path="email" element={<InsertEmail />} />
        </Route>
        <Route path="/login" element={<LoginComponentMain />} />
        <Route path="/signup" element={<RegisterUserComponentMain />} />
        <Route path="/confirm-code-email" element={<EmailConfirmCode />} />
        {/* <Route path="/signup" element={<Home />} /> -> ESSE AQUI TEM QUE FAZER CADASTRO LÁ NO SITE PARA VER COMO QUE É GRAVA NO OBS */}
        {/* <Route path="/filme/:title" element={<SelectCinema />} /> */}
      </Routes>
    </Styled.ContainerMain>
  );
};

export default AppContent;
