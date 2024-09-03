import { useEffect, useState } from 'react';
import FooterLoginAndRegister from '../../LoginAndRegisterUserComponents/FooterLoginAndRegisterUserComponents/FooterLoginAndRegister/FooterLoginAndRegister';
import HeaderToLoginAndRegisterComponent from '../../LoginAndRegisterUserComponents/HeaderToLoginAndRegisterComponent/HeaderToLoginAndRegisterComponent';
import BodyRegisterUserComponentsMain from '../BodyRegisterUserComponentsMain/BodyRegisterUserComponentsMain';
import StepToCreateAccount from '../StepToCreateAccount/StepToCreateAccount';

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

  const [numberToCreateAccount, setNumberToCreateAccount] = useState('(+55) 67 98114 5503');

  const changeValueShowStepToContinueCreateAccount = (value: boolean) => {
    setShowStepToContinueCreateAccount(value);
  };

  return (
    <div>
      <HeaderToLoginAndRegisterComponent valueToSpan="Cadastrar"></HeaderToLoginAndRegisterComponent>
      {!showStepToContinueCreateAccount && (
        <BodyRegisterUserComponentsMain
          setValueInputPhone={setValueInputPhone}
        ></BodyRegisterUserComponentsMain>
      )}

      {showStepToContinueCreateAccount && (
        <StepToCreateAccount
          numberToCreateAccount={numberToCreateAccount}
          changeValueShowStepToContinueCreateAccount={changeValueShowStepToContinueCreateAccount}
        ></StepToCreateAccount>
      )}
      <FooterLoginAndRegister></FooterLoginAndRegister>
    </div>
  );
};

export default RegisterUserComponentMain;
