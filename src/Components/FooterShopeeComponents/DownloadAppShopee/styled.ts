import styled from 'styled-components';

export const ContainerDownloadAppShopee = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  >h1 {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 15px;

  }

  >span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const H1 = styled.h1`

`;

export const Span = styled.span`

`;

export const ContainerQrCodeAndAppStoreGooglePlay = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContainerImgQrCode = styled.div`
  width: 88px;
  height: 88px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 28%);
  box-sizing: border-box;

  >img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ContainerImgAppStoreGooglePlay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const ContainerImgOnly = styled.div`
  width: 76px;
  height: 24px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 28%);
  box-sizing: border-box;

  >img {
    width: 100%;
    height: 100%;
    object-fit: none;
  }
`;
