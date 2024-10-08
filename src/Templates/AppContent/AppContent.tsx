import * as Styled from './style';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '../Home/Home';
import LoginComponentMain from '../../Components/LoginComponents/LoginComponentMain/LoginComponentMain';
import RegisterUserComponentMain from '../../Components/RegisterUserComponents/RegisterUserComponentMain/RegisterUserComponentMain';
import AccountSetting from '../../Components/AccountsComponents/AccountSetting';
import Perfil from '../../Components/AccountsComponents/MyAccount/PerfilComponents/Perfil/Perfil';
import CardsBankAccounts from '../../Components/AccountsComponents/MyAccount/CardsBackAccountsComponets/CardsBankAccounts/CardsBankAccounts';
import FillCpfAndBirthdate from '../../Components/AccountsComponents/MyAccount/PerfilComponents/FillCpfAndBirthdate/FillCpfAndBirthdate';
import InsertEmail from '../../Components/AccountsComponents/MyAccount/PerfilComponents/InsertEmail/InsertEmail';
import ChangeInformationEmail from '../../Components/AccountsComponents/MyAccount/PerfilComponents/ChangeInformationEmail/ChangeInformationEmail';
import PhoneChange from '../../Components/AccountsComponents/MyAccount/PerfilComponents/PhoneChange/PhoneChange';
import EmailConfirmCode from '../../Components/AccountsComponents/MyAccount/PerfilComponents/EmailConfirmCode/EmailConfirmCode';
import Addresses from '../../Components/AccountsComponents/MyAccount/AddressesComponents/Addresses/Addresses';
import ChangePassword from '../../Components/AccountsComponents/MyAccount/ChangePasswordComponents/ChangePassword/ChangePassword';
import VerifyPassword from '../../Components/VerifyPasswordComponents/VerifyPassword/VerifyPassword';
import VerifyPasswordStep2 from '../../Components/VerifyPasswordComponents/VerifyPasswordStep2/VerifyPasswordStep2';
import Cokie from '../../Components/AccountsComponents/MyAccount/CookieComponents/Cokie/Cokie';
import SettingPrivacy from '../../Components/AccountsComponents/MyAccount/SettingPrivacyComponents/SettingPrivacy/SettingPrivacy';
import AccountDelete from '../../Components/AccountsComponents/MyAccount/AccountDeleteComponents/AccountDelete/AccountDelete';

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
        <Route path="/verify" element={<VerifyPassword />} />
        <Route path="/verify/password" element={<VerifyPasswordStep2 />} />
        <Route path="/user/account" element={<AccountSetting />}>
          <Route index element={<Navigate to="profile" />}></Route>
          <Route path="profile" element={<Perfil />} />
          <Route path="payment" element={<CardsBankAccounts />} />
          <Route path="address" element={<Addresses />} />
          <Route path="email" element={<InsertEmail />} />
          <Route path="change-email" element={<ChangeInformationEmail />} />
          <Route path="phone" element={<PhoneChange />} />
          <Route path="kyc" element={<FillCpfAndBirthdate />} />
          <Route path="password" element={<ChangePassword />} />
          <Route path="cookie" element={<Cokie />} />
          <Route path="delete" element={<AccountDelete />} />
        </Route>
        <Route path="/user/setting" element={<AccountSetting />}>
          <Route path="privacy" element={<SettingPrivacy />} />
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
