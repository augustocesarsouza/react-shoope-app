import { styled } from 'styled-components';

export const ContainerBodyMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-color: rgb(238, 77, 45);
`;

export const ContainerMiddleBody = styled.div`
  /* width: 100%; */
  height: 100%;
  position: relative;
  background-image: url("https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724768580/img-shopee/img-super-shopping_rtrmhd.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 auto;
`;

export const ContainerLoginRegisterMain = styled.div`
  width: 1040px;
  height: 600px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ContainerLoginRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 428px;
  background-color: #fff;
  padding: 22px 30px;
  border-radius: 5px;

  >h1 {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  >input {
    border: 0;
    filter: none;
    flex: 1;
    flex-shrink: 0;
    height: 16px;
    outline: none;
    padding: 12px;
    border: 1px solid #73737347;
  }

  >svg {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 14px;
    top: 11px;
  }
`;

export const ContainerButtonSpansOrWhiteLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 40px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 0px;
  border: none;
  background-color: #f3826c;
  color: #fff;
  cursor: not-allowed;
  height: 100%;
  width: 100%;
`

export const ContainerSpan = styled.div`
  display: flex;
  justify-content: space-between;

  >span {
    font-size: 12px;
    color: #05a;
  }
`

export const ContainerLinesAndSpanOr = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Span = styled.span``;

export const SpanOr = styled.span`
  font-size: 12px;
  color: #5f5f5f73;
`;

export const SpanLineWhite = styled.span`
  width: 100%;
  height: 1px;
  background-color: #5f5f5f36;
`;

export const ContainerFacebookGoogleApple = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ContainerSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid rgba(0, 0, 0, 0.26);
  padding: 5px;
  border-radius: 3px;
  width: 100%;
  height: 40px;
  cursor: pointer;

  >span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.87);
    line-height: 1;
  }
`;

interface ContainerImgSocialMedia {
  $whichimg: string;
}

export const ContainerImgSocialMedia = styled.div<ContainerImgSocialMedia>`
  display: flex;
  width: 22px;
  height: 22px;
  background-image: url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/7ffa33c1e9518f30.png");
  background-position-x: ${props => props.$whichimg === 'facebook' && '5.55556%'};
  background-position-y: ${props => props.$whichimg === 'facebook' && '62.6667%'};
  background-size: ${props => props.$whichimg === 'facebook' && '325% 287.5%'};

  background-position-x: ${props => props.$whichimg === 'google' && '83.9286%'};
  background-position-y: ${props => props.$whichimg === 'google' && '5.15464%'};
  background-size: ${props => props.$whichimg === 'google' && '722.222% 638.889%'};

  background-position-x: ${props => props.$whichimg === 'apple' && '5.10204%'};
  background-position-y: ${props => props.$whichimg === 'apple' && '6.0241%'};
  background-size: ${props => props.$whichimg === 'apple' && '406.25% 359.375%'};
`;

export const ContainerNewInTheShopee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 14px;

  >span {
    color: #00000073;
  }

  >a {
    text-decoration: none;
    color: rgb(238, 77, 45);
    font-weight: 500;
    cursor: pointer;
  }
`;

export const ContainerSpanWarning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpanWarning = styled.span`
  font-size: 12px;
  text-align: center;
  width: 300px;
  color: rgba(0,0,0,.87);
  padding: 0 10px;
`;

export const SpanHighlighted = styled.span`
  color: #ee4d2d;
`;