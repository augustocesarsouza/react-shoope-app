import styled from 'styled-components';

export const ContainerFooterMain = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1150px;
`;

export const ContainerCustomerService = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
  }

  >span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);

  }
`;

export const ContainerAboutShopee = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);

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

export const ContainerPayment = styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);

  }

  >span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const ContainerImgPayment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 240px;
  gap: 5px;
`;

export const ContainerImg = styled.div`
  width: 60px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  box-sizing: border-box;

  >img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ContainerFollowUs = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  >h1 {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);

  }

  >span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const ContainerSocialMediaFollowUs = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 5px;

  >span {
    font-size: 13px;
    line-height: 1.4;
  }
`;

export const ContainerImgFollowUs = styled.div`
  width: 16px;

  >img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;