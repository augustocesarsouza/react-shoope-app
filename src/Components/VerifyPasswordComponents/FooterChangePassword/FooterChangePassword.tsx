import AboutShopee from '../AboutShopee/AboutShopee';
import CustomerService from '../CustomerService/CustomerService';
import DownloadAppShopee from '../DownloadAppShopee/DownloadAppShopee';
import FollowUs from '../FollowUs/FollowUs';
import Payment from '../Payment/Payment';
import RightsShopee from '../RightsShopee/RightsShopee';
import * as Styled from './styled';

const FooterChangePassword = () => {
  return (
    <Styled.ContainerFooterMain>
      <Styled.ContainerFooter>
        <CustomerService></CustomerService>

        <AboutShopee></AboutShopee>

        <Payment></Payment>

        <FollowUs></FollowUs>

        <DownloadAppShopee></DownloadAppShopee>
      </Styled.ContainerFooter>
      <RightsShopee></RightsShopee>
    </Styled.ContainerFooterMain>
  );
};

export default FooterChangePassword;
