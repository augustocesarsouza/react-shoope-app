import BodyComponentsMain from '../BodyComponents/BodyComponentsMain/BodyComponentsMain';
import FooterLoginComponentsMain from '../FooterLoginComponents/FooterLoginComponentsMain/FooterLoginComponentsMain';
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
