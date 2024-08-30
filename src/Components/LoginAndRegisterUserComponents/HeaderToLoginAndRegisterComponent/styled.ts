import styled from 'styled-components';

export const ContainerHeaderLoginComponentMain = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px 30px 20px;
`;

export const ContainerHeaderLoginComponent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1150px;
`;

export const ContainerSvgShopeeAndSpanRegister = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;

  >span {
    font-size: 24px;
    line-height: 28.8px;
    color: rgb(34, 34, 34);
  }
`;

export const ContainerSvgShopeeLogin = styled.div`
  display: flex;
  width: 123px;
  height: 40px;

  >svg {
    width: 100%;
    height: 100%;
    fill: #ee4d2d;
  }
`;

export const Span = styled.span``;

export const ContainerNeedHelp = styled.div`
  display: flex;
  align-items: end;

  >span {
    font-size: 14px;
    color: rgb(238, 77, 45);
    line-height: 1;
  }
`;