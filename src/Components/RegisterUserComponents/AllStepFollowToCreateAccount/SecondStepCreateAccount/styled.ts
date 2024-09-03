import { styled } from 'styled-components';

export const Container = styled.div`
  
`;

interface ContainerSpanAndSvgProsp {
  $changecolorspanandsvg: boolean;
  $alreadytypepassword: boolean;
}

export const ContainerSpanAndSvg = styled.div<ContainerSpanAndSvgProsp>`
  display: block;
  align-items: flex-start;
  /* align-items: center;
  gap: 5px; */

  >span {
    font-size: 14px;
    color: #bfbfbf;
    vertical-align: middle;
    color: ${props => {
      if(props.$alreadytypepassword){
        return props.$changecolorspanandsvg ? "rgb(102, 204, 0)" : "red";
      }else {
        return "#bfbfbf";
      }
    }};
    /* color: ${props => props.$changecolorspanandsvg ? "red" : "#bfbfbf"}; */
  }

  >svg {
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-left: 5px;
  }
`;

export const Span = styled.span`

`;

export const ContainerTypeCodeVerification = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerTypeCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;
  width: 80%;

  >span {
    font-size: 20px;
  }
`;

export const ContainerSvgArrow = styled.div`
  display: flex;

  >svg {
    width: 20px;
    height: 20px;
    fill: #ee4d2d;
  }
`

export const ContainerYourCodeWasSendSmsMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px 0px 70px;
  height: 425px;
`;

export const ContainerYourCodeWasSendSms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 294px;

  >span {
    font-size: 14px;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    margin: 10px 0 25px;
  }
`;

export const ContainerInputPasswordAndValidations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  /* >input {
    width: 100%;
    border-radius: 1px;
    border: 1px solid #0000006e;
    padding: 10px 0px 10px 8px;
    outline: none;
  } */

  >span {
    font-size: 14px;
    color: #bfbfbf;
  }
`;

export const ContainerInputPassword = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  >input {
    width: 100%;
    border-radius: 1px;
    border: 1px solid #0000006e;
    /* padding: 10px 0px 10px 8px; */
    padding-left: 10px;
    height: 40px;
    outline: none;
  }

  >div {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;

    >svg {
    width: 100%;
    height: 100%;
    fill: #bfbfbf;
    cursor: pointer;
  }
  }
`;

export const Input = styled.input`

`;

export const ContainerButtonNext = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  height: 40px;

  > button {
    cursor: not-allowed;
    opacity: .7;
    background-color: rgb(238, 77, 45);
    box-shadow: 0 1px 1px rgba(0, 0, 0, .09);
    color: #fff;
    border: none;
    width: 100%;
  }
`;

export const Button = styled.button`
`