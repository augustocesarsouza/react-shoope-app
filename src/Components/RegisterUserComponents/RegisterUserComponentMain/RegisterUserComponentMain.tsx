import { createContext, useEffect, useState } from 'react';
import FooterLoginAndRegister from '../../LoginAndRegisterUserComponents/FooterLoginAndRegisterUserComponents/FooterLoginAndRegister/FooterLoginAndRegister';
import HeaderToLoginAndRegisterComponent from '../../LoginAndRegisterUserComponents/HeaderToLoginAndRegisterComponent/HeaderToLoginAndRegisterComponent';
import BodyRegisterUserComponentsMain from '../BodyRegisterUserComponentsMain/BodyRegisterUserComponentsMain';
import StepToCreateAccount from '../StepToCreateAccount/StepToCreateAccount';

export interface RegisterUserComponentMainProps {
  setCodeUserCreate: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  codeUserCreate: { [key: string]: string };
  numberPhone: string;
}

export const ContextRegisterUserComponentMain =
  createContext<RegisterUserComponentMainProps | null>(null);

const RegisterUserComponentMain = () => {
  const [valueInputPhone, setValueInputPhone] = useState('');
  const [showStepToContinueCreateAccount, setShowStepToContinueCreateAccount] = useState(false);
  const [codeUserCreate, setCodeUserCreate] = useState<{ [key: string]: string }>({});
  const [numberPhone, setNumberPhone] = useState('');

  const sendSmsPhone = async (number: string) => {
    //GERAR AMANHA O CODIGO QUE A PESSOA TEM QUE CONFIRMAR PARA CRIAR A CONTA!
    // Tem que salvar esse codigo, e depois verificar quando ele mandar e comparar pode ser um "chave"e valor, e o valor com codigo e tals
    // Colocar amanha esse 'accountSid' e esse 'authToken' valor "ENV" environment
    let numberRandom = '';

    for (let i = 0; i < 6; i++) {
      const code = Math.floor(Math.random() * 9) + 1;
      numberRandom += code;
    }

    setNumberPhone(number);

    setCodeUserCreate((value) => {
      return { ...value, [number]: numberRandom };
    });

    let objSend = {
      body: `Use o codigo ${numberRandom} para criar sua conta Shopee`,
      phone: number,
    };

    console.log(objSend);

    // const resp = await fetch('http://localhost:3000/send-message', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(objSend),
    // });

    // if (resp.status === 200) {
    //   setShowStepToContinueCreateAccount(true);
    // } else if (resp.status === 400) {
    //   setShowStepToContinueCreateAccount(false);
    // }
  };

  useEffect(() => {
    console.log(codeUserCreate);
  }, [codeUserCreate]);

  useEffect(() => {
    if (valueInputPhone.length >= 12) {
      let number = '+55';
      for (let i = 0; i < valueInputPhone.length; i++) {
        const element = valueInputPhone[i];
        number += element;
      }

      sendSmsPhone(number.replace(/\s+/g, ''));

      // console.log(number.replace(/\s+/g, ''));

      // setShowStepToContinueCreateAccount(true);
    } else {
      // setShowStepToContinueCreateAccount(false);
    }
  }, [valueInputPhone]);

  const [numberToCreateAccount, setNumberToCreateAccount] = useState('');

  const changeValueShowStepToContinueCreateAccount = (value: boolean) => {
    setShowStepToContinueCreateAccount(value);
  };

  return (
    <ContextRegisterUserComponentMain.Provider
      value={{
        setCodeUserCreate: setCodeUserCreate,
        codeUserCreate: codeUserCreate,
        numberPhone: numberPhone,
      }}
    >
      <HeaderToLoginAndRegisterComponent valueToSpan="Cadastrar"></HeaderToLoginAndRegisterComponent>
      {!showStepToContinueCreateAccount && (
        <BodyRegisterUserComponentsMain
          setValueInputPhone={setValueInputPhone}
        ></BodyRegisterUserComponentsMain>
      )}

      {showStepToContinueCreateAccount && (
        <StepToCreateAccount
          numberToCreateAccount={numberToCreateAccount}
          valueInputPhone={valueInputPhone}
          changeValueShowStepToContinueCreateAccount={changeValueShowStepToContinueCreateAccount}
        ></StepToCreateAccount>
      )}
      <FooterLoginAndRegister></FooterLoginAndRegister>
    </ContextRegisterUserComponentMain.Provider>
  );
};

export default RegisterUserComponentMain;
