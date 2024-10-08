import * as Styled from './styled';

const DownloadAppShopee = () => {
  return (
    <Styled.ContainerDownloadAppShopee>
      <Styled.H1>BAIXAR APP SHOPEE</Styled.H1>
      <Styled.ContainerQrCodeAndAppStoreGooglePlay>
        <Styled.ContainerImgQrCode>
          <img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725014712/img-shopee/27788e45f5489f39ef1e774e9bbedb6f_uhhvnl.png"
            alt="qr-code"
          />
        </Styled.ContainerImgQrCode>
        <Styled.ContainerImgAppStoreGooglePlay>
          <Styled.ContainerImgOnly>
            <img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725014727/img-shopee/2c0f5bda4ce39caff001e7ccec309bc6_otd1fv.png"
              alt="app-store"
            />
          </Styled.ContainerImgOnly>
          <Styled.ContainerImgOnly>
            <img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725014743/img-shopee/3b43f8cafbf943868154166639011597_mlucen.png"
              alt="google-play"
            />
          </Styled.ContainerImgOnly>
        </Styled.ContainerImgAppStoreGooglePlay>
      </Styled.ContainerQrCodeAndAppStoreGooglePlay>
    </Styled.ContainerDownloadAppShopee>
  );
};

export default DownloadAppShopee;
