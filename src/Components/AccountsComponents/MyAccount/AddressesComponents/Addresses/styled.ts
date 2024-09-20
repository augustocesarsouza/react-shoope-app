import styled from "styled-components";

export const Container = styled.div``;

export const H1 = styled.h1``;

export const Span = styled.span``;

export const ContainerMain = styled.div`
  width: 950px;
`;

export const ContainerMainAddresses = styled.div`
  display: flex;
  justify-content: space-between;

  >h1 {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ContainerInsertAddressMain = styled.div`
  background-color: #ee4d2d;
  font-size: 14px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #ee5c3f;
  }
`;

export const ContainerInsertAddress = styled.div`
  display: flex;
  gap: 5px;

  >span {
    font-size: 14px;
    color: #fff;
  }
`;

export const ContainerSvgPlus = styled.div`
  display: flex;
  

  >svg {
    width: 14px;
    height: 14px;
    fill: #fff;
  }
`;

export const ContainerSvgThereIsNoAddresses = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 500px;

  >svg {
    width: 120px;
    height: 120px;
  }

  >span {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0,0,0,.65);
  }
`;

export const ContainerModalNewAddress = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .4);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const ContainerModalInner = styled.div`
  width: 500px;
  height: 564px;
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  >span {
    font-size: 20px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const ContainerAllInputs = styled.div`
  display: flex;
  gap: 10px;
`;

interface ContainerInputAllProps {
  $width: string;
}

export const ContainerInputAll = styled.div<ContainerInputAllProps>`
  border: 1px solid rgba(0, 0, 0, .14);
  border-radius: 2px;
  box-shadow: inset 0 2px 0 0 rgba(0, 0, 0, .02);
  box-sizing: border-box;
  height: 40px;
  position: relative;
  transition: border-color .3s ease-in-out, box-shadow .3s ease-in-out, background-color .3s ease-in-out;
  /* width: 100%; */
  width: ${props => props.$width};
`;

export const ContainerNameInput = styled.div`
  background: #fff;
  color: rgba(0, 0, 0, .4);
  display: none;
  font-size: 12px;
  font-weight: 500;
  left: 10px;
  padding: 0 3px;
  position: absolute;
  top: -6px;

  /* display: block; */
`;

export const Input = styled.input`
  background-color: initial;
  border: 0;
  box-sizing: border-box;
  color: #222;
  flex: 1;
  font-size: 14px;
  height: 38px;
  min-width: 0;
  outline: none;
  padding: 10px;
  width: 100%;

  &::placeholder {
    color: rgb(0 0 0 / 43%);
  }
`;

export const ContainerSaveAs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  gap: 15px;

  >span {
    font-size: 14px;
    color: #555;
  }
`;

export const ContainerSaveHomeWork = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 500;
`; 

export const ContainerSaveHome = styled.div`
  align-items: center;
  border: 1px solid rgba(0, 0, 0, .09);
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .03);
  box-sizing: border-box;
  display: flex;
  height: 40px;
  margin-right: 10px;
  max-width: 146px;
  padding: 0 12px;
  color: rgb(0 0 0 / 42%);
`;

export const ContainerSaveWork = styled.div`
  align-items: center;
  border: 1px solid rgba(0, 0, 0, .09);
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .03);
  box-sizing: border-box;
  display: flex;
  height: 40px;
  margin-right: 10px;
  max-width: 146px;
  padding: 0 12px;
  color: rgb(0 0 0 / 42%);
`;

export const ContainerTwoButton = styled.div`
  display: flex;
  justify-content: flex-end;

`;

export const ButtonCancel = styled.button`
  align-items: center;
  background: none;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  min-width: 140px;
  outline: none;
  padding: 10px;
  color: #555;
  margin-right: 6px;
`;

export const ButtonSend = styled.button`
  background-color: #ee4d2d;
  color: #fff;
  align-items: center;
  /* background: none; */
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  min-width: 140px;
  outline: none;
  padding: 10px;
`;