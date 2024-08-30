import FooterLoginAndRegister from '../../LoginAndRegisterUserComponents/FooterLoginAndRegisterUserComponents/FooterLoginAndRegister/FooterLoginAndRegister';
import BodyComponentsMain from '../BodyComponents/BodyComponentsMain/BodyComponentsMain';
import HeaderLoginComponentsMain from '../HeaderLoginComponents/HeaderLoginComponentsMain/HeaderLoginComponentsMain';

const LoginComponentMain = () => {
  return (
    <div>
      <HeaderLoginComponentsMain></HeaderLoginComponentsMain>
      <BodyComponentsMain></BodyComponentsMain>
      <FooterLoginAndRegister></FooterLoginAndRegister>
    </div>
  );
};

export default LoginComponentMain;
