import { useEffect, useState } from 'react';
import FooterLoginAndRegister from '../../LoginAndRegisterUserComponents/FooterLoginAndRegisterUserComponents/FooterLoginAndRegister/FooterLoginAndRegister';
import HeaderToLoginAndRegisterComponent from '../../LoginAndRegisterUserComponents/HeaderToLoginAndRegisterComponent/HeaderToLoginAndRegisterComponent';
import BodyRegisterUserComponentsMain from '../BodyRegisterUserComponentsMain/BodyRegisterUserComponentsMain';

const RegisterUserComponentMain = () => {
  const [valueInputPhone, setValueInputPhone] = useState('');

  useEffect(() => {
    if (valueInputPhone.length >= 12) {
      console.log('mostrar a outra parte do registro');
      // VER DEPOIS O NEGOCIO QUE TESTA O COMPONENT DO REACT E MOSTRA O QUE ESTÁ SENDO RENDERIZADO TEM QUE BAIXA PESQUISA
    }
  }, [valueInputPhone]);

  return (
    <div>
      <HeaderToLoginAndRegisterComponent valueToSpan="Cadastrar"></HeaderToLoginAndRegisterComponent>
      <BodyRegisterUserComponentsMain
        setValueInputPhone={setValueInputPhone}
      ></BodyRegisterUserComponentsMain>
      <FooterLoginAndRegister></FooterLoginAndRegister>
    </div>
  );
};

export default RegisterUserComponentMain;
