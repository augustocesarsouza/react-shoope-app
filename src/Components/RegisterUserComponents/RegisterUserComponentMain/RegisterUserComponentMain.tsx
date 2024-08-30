import FooterLoginAndRegister from '../../LoginAndRegisterUserComponents/FooterLoginAndRegisterUserComponents/FooterLoginAndRegister/FooterLoginAndRegister';
import HeaderToLoginAndRegisterComponent from '../../LoginAndRegisterUserComponents/HeaderToLoginAndRegisterComponent/HeaderToLoginAndRegisterComponent';
import BodyRegisterUserComponentsMain from '../BodyRegisterUserComponentsMain/BodyRegisterUserComponentsMain';

const RegisterUserComponentMain = () => {
  return (
    <div>
      <HeaderToLoginAndRegisterComponent valueToSpan="Cadastrar"></HeaderToLoginAndRegisterComponent>
      <BodyRegisterUserComponentsMain></BodyRegisterUserComponentsMain>
      <FooterLoginAndRegister></FooterLoginAndRegister>
    </div>
  );
};

export default RegisterUserComponentMain;
