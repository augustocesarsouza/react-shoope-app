import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Container = styled.div``;

export const ContainerMainMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;

`;

export const ContainerPerfilMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerOnlyPerfil = styled.div`
  margin-bottom: 30px;

  >h1 {
    font-size: 18px;
    font-weight: 500;
    color: rgb(51, 51, 51);
  }

  >span {
    font-size: 14px;
  }
`;

export const ContainerMyPerfilInfo = styled.div``;

export const Form = styled.form``;

export const Table = styled.table``;

export const Label = styled.label``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
  color: rgba(85, 85, 85, .8);
  min-width: 20%;
  overflow: hidden;
  padding-bottom: 30px;
  text-align: right;
  white-space: nowrap;
  padding-bottom: 54px;
  font-size: 14px;
`;

export const TdSecond = styled.td`
  box-sizing: border-box;
  padding-bottom: 30px;
  padding-left: 20px;
`;

export const TdNome = styled.td`
  color: rgba(85, 85, 85, .8);
  min-width: 20%;
  overflow: hidden;
  padding-bottom: 30px;
  text-align: right;
  white-space: nowrap;
  font-size: 14px;
`;

export const ContainerOnlyInputNameUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  >input {
    padding: 12px;
    outline: none;
    border: 1px solid #00000026;
    margin-bottom: 7px;
    width: 100%;
  }

  >span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const ContainerOnlyInputName = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  >input {
    padding: 12px;
    outline: none;
    border: 1px solid #00000026;
    width: 100%;
  }

  >span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const Link = styled.a`
  font-size: 13px;
  color: rgb(0, 85, 170);
`;

export const ContainerCelPhone = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;

  color: #333;
  font-size: 14px;

  >a {
    border-bottom: 1px solid rgb(0, 85, 170);
    cursor: pointer;
  }
`

export const ContainerMainInputs = styled.div`
  display: flex;
  gap: 5px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
`;

interface InputCheckboxProps {
  $showCheckbox: boolean;
}

export const InputCheckbox = styled.div<InputCheckboxProps>`
  align-items: center;
  /* border: 2px solid rgba(0, 0, 0, .26); */
  /* border: 2px solid #ee4d2d; */
  border: 2px solid ${props => props.$showCheckbox ? "#ee4d2d" : "rgba(0, 0, 0, .26)"};
  border-radius: 100%;
  box-sizing: border-box;
  display: flex;
  height: 18px;
  justify-content: center;
  width: 18px;
`;

interface CheckBoxProps {
  $showCheckbox: boolean;
}

export const CheckBox = styled.div<CheckBoxProps>`
  /* background: #ee4d2d; */
  background: ${props => props.$showCheckbox ? "#ee4d2d" : "none"};
  border-radius: 100%;
  height: 6px;
  opacity: 1;
  width: 6px;
`;

export const ContainerButtonSave = styled.div`
  display: flex;

  >button {
    background: #ee4d2d;
    color: #fff;
    outline: 0;
    overflow: visible;
    position: relative;

    height: 40px;
    max-width: 220px;
    min-width: 70px;
    padding: 0 20px;

    border: none;
    cursor: pointer;

    &:hover {
      background-color: #ee4d2ded;
    }
  }
`;

export const ContainerShowInsertEmailMain = styled.div`
  /* width: 750px; */
  width: 100%;

  >h1 {
    color: rgba(0, 0, 0, .87);
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5rem;
    padding-left: 2px;

    border-bottom: 1px solid rgba(0, 0, 0, .09);
    padding-bottom: 20px;
    margin-bottom: 40px;
  }
`;

export const ContainerInsertEmail = styled.div`
  display: flex;

  >label {
    color: rgba(0, 0, 0, .65);
    font-size: 16px;
    min-width: 170px;
    padding: 10px 20px 0 0;
    text-align: left;
  }
`;

export const ContainerInputEmailButtonCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;

  >button {
    height: 40px;
    width: 121px;

    background: #ee4d2d;
    color: #fff;
    outline: 0;
    overflow: visible;
    position: relative;
    border: none;
    border-radius: 3px;
    font-size: 16px;
  }
`;

export const ContainerInputEmail = styled.div`
  /* display: flex;
  box-shadow: 0 0 4px rgba(0, 0, 0, .14);
  background: #fff6f7;

  border: 1px solid rgba(0, 0, 0, .14);
  border-radius: 2px;
  box-shadow: inset 0 2px 0 rgba(0, 0, 0, .02);
  box-sizing: border-box;
  height: 38px;
  overflow: hidden;
  width: 100%; */

  border: 1px solid rgba(0, 0, 0, .14);
  border-radius: 2px;
  box-shadow: inset 0 2px 0 rgba(0, 0, 0, .02);
  box-sizing: border-box;
  height: 38px;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;

  >input {
    border: 0;
    filter: none;
    flex: 1;
    flex-shrink: 0;
    height: 16px;
    outline: none;
    padding: 12px;
    width: 100%;

    &::placeholder {
      color: #888; /* Escolha a cor que deseja para o placeholder */
      opacity: 1;  /* Controla a opacidade do placeholder, por padrão pode ser menor */
    }
  }
`;

export const ContainerCheckboxToEmailMain = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);

  >span {
    cursor: default;
  }
`;

interface ContainerCheckboxToEmailProps {
  $showCheckbox: boolean;
}

export const ContainerCheckboxToEmail = styled.div<ContainerCheckboxToEmailProps>`
  height: 20px;
  width: 20px;
  border-radius: 2px;
  flex-shrink: 0;
  margin-right: 8px;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  position: relative;

  /* border: 1px solid rgba(0, 0, 0, .54); */
  /* border: 1px solid #ee4d2d; */
  border: 1px solid ${props => props.$showCheckbox ? "#ee4d2d" : "rgba(0, 0, 0, .54)"};
  background-color: ${props => props.$showCheckbox ? "#ee4d2d" : "#fff"};
  cursor: pointer;

  ${({$showCheckbox}) =>
    $showCheckbox && `
     &::before {
      position: absolute;
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
      content: "";
      height: 5px;
      left: 3px;
      top: 3px;
      transform: rotate(-45deg);
      width: 9px;
    }
  `}

  /* &::before {
    position: absolute;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    content: "";
    height: 5px;
    left: 3px;
    top: 3px;
    transform: rotate(-45deg);
    width: 9px;
  } */
`;

export const ContainerLinkInsert = styled.div`
  display: flex;
  align-items: flex-end;

  >span {
    margin-right: 5px;
  }

  >a {
    border-bottom: 1px solid rgb(0, 85, 170);
    cursor: pointer;
  }
`;

export const ContainerUpdateSuccessfully = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #00000059;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerProfileUpdate = styled.div`
  background-color: #fff;
  width: 450px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

