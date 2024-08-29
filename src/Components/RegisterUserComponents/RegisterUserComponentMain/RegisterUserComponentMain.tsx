import FooterLoginComponentsMain from '../../LoginAndRegisterUserComponents/FooterLoginComponentsMain/FooterLoginComponentsMain';
import HeaderToLoginAndRegisterComponent from '../../LoginAndRegisterUserComponents/HeaderToLoginAndRegisterComponent/HeaderToLoginAndRegisterComponent';
import BodyRegisterUserComponentsMain from '../BodyRegisterUserComponentsMain/BodyRegisterUserComponentsMain';

const RegisterUserComponentMain = () => {
  return (
    <div>
      <HeaderToLoginAndRegisterComponent valueToSpan="Cadastrar"></HeaderToLoginAndRegisterComponent>
      <BodyRegisterUserComponentsMain></BodyRegisterUserComponentsMain>
      <FooterLoginComponentsMain></FooterLoginComponentsMain>
    </div>
  );
};

export default RegisterUserComponentMain;
