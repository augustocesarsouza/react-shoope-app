import FooterLoginComponentsMain from '../../LoginAndRegisterUserComponents/FooterLoginComponentsMain/FooterLoginComponentsMain';
import BodyComponentsMain from '../BodyComponents/BodyComponentsMain/BodyComponentsMain';
import HeaderLoginComponentsMain from '../HeaderLoginComponents/HeaderLoginComponentsMain/HeaderLoginComponentsMain';

const LoginComponentMain = () => {
  return (
    <div>
      <HeaderLoginComponentsMain></HeaderLoginComponentsMain>
      <BodyComponentsMain></BodyComponentsMain>
      <FooterLoginComponentsMain></FooterLoginComponentsMain>
    </div>
  );
};

export default LoginComponentMain;
