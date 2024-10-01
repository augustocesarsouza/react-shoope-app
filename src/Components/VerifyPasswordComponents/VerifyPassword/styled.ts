import styled from 'styled-components';

export const Container = styled.div``;

export const Span = styled.span``;

export const SpanLinkBlue = styled.span`
  color: #488bf1;
`;

export const H1 = styled.h1``;

export const Button = styled.h1``;

export const ContainerMain = styled.div`
  
`;

export const ContainerBodyVerifyPasswordMain = styled.div`
  margin: 0px 224px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 60px;
`;

export const ContainerBodyVerifyPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 440px;
  height: 327px;
  border-bottom: 1px solid #37373738;
  padding-bottom: 70px;

  >h1 {
    font-size: 18px;
    font-weight: 500;
    color: rgb(24 24 24 / 69%);
    text-align: center;
    margin-bottom: 80px;
  }
`;

export const ContainerButtonVerify = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  border: 1px solid #37373738;
  border-radius: 3px;
  width: 310px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  line-height: 1;
  cursor: pointer;
  color: #555;

  >span {
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    border-color: #37373729;
    color: #555555b3;
  }
`;

export const ContainerSvgShield = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const ContainerSvgLock = styled.div`
  display: flex;

  >svg > path {
    fill: #555;
  }
`;

export const ContainerBottomTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerWhyShouldIVerifyMyAccount = styled.div`
  width: 630px;

  >h1 {
    font-size: 14px;
    color: rgba(0,0,0,.87);
  }

  >span {
    font-size: 12px;
    color: rgba(0,0,0,.54);
  }
`;

export const ContainerWhatCanIdoNotVerify = styled.div`
  width: 630px;

  >h1 {
    font-size: 14px;
    color: rgba(0,0,0,.87);
  }

  >span {
    font-size: 12px;
    color: rgba(0,0,0,.54);
  }
`;