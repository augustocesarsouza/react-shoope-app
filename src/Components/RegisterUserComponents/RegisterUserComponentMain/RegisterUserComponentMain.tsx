import { useEffect, useState } from 'react';
import FooterLoginAndRegister from '../../LoginAndRegisterUserComponents/FooterLoginAndRegisterUserComponents/FooterLoginAndRegister/FooterLoginAndRegister';
import HeaderToLoginAndRegisterComponent from '../../LoginAndRegisterUserComponents/HeaderToLoginAndRegisterComponent/HeaderToLoginAndRegisterComponent';
import BodyRegisterUserComponentsMain from '../BodyRegisterUserComponentsMain/BodyRegisterUserComponentsMain';
import FirstStepToCreateAccount from '../FirstStepToCreateAccount/FirstStepToCreateAccount';

const RegisterUserComponentMain = () => {
  const [valueInputPhone, setValueInputPhone] = useState('');
  const [showStepToContinueCreateAccount, setShowStepToContinueCreateAccount] = useState(true);

  useEffect(() => {
    if (valueInputPhone.length >= 12) {
      setShowStepToContinueCreateAccount(true);
    } else {
      // setShowStepToContinueCreateAccount(false);
    }
  }, [valueInputPhone]);

  return (
    <div>
      <HeaderToLoginAndRegisterComponent valueToSpan="Cadastrar"></HeaderToLoginAndRegisterComponent>
      {!showStepToContinueCreateAccount && (
        <BodyRegisterUserComponentsMain
          setValueInputPhone={setValueInputPhone}
        ></BodyRegisterUserComponentsMain>
      )}

      {showStepToContinueCreateAccount && <FirstStepToCreateAccount></FirstStepToCreateAccount>}
      <FooterLoginAndRegister></FooterLoginAndRegister>
    </div>
  );
};

export default RegisterUserComponentMain;
